import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'

import Container from './Container'

const Boarding = styled.div`
	background: linear-gradient(to bottom, #2dd7d3, #8c7ddd);
`

const HomePage = props => (
	<Container {...props}>
		<Boarding>
			<iframe
				src="http://85.214.78.13:3000/"
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
