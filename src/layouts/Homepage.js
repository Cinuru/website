import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'

import Container from './Container'
import { Link } from 'phenomic'

const Boarding = styled.div`
	background: linear-gradient(to bottom, #2dd7d3, #8c7ddd);
`

const Logo = styled.span`
		    padding: 1rem 2rem;
				display: inline-block;
				&:hover,
				&:active,
				&:focus {
						transform: scale(1.05);
				}
				img {
						width: auto;
						height: 2rem;
				}
		}
`

const HomePage = props => (
	<Container {...props}>
		<Boarding>
			<Logo>
					<Link to="/">
							<img src="/assets/logo.svg" alt="Cinuru" />
					</Link>
			</Logo>
			<iframe
				src="http://localhost:3000/"
				width="100%"
				height="660px"
				allowTransparency="true"
			/>
		</Boarding>
	</Container>
);

HomePage.propTypes = {
	head: PropTypes.object.isRequired,
};

export default HomePage;
