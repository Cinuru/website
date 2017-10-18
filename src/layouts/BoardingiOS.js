import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import BoardingSectioniOS from '../components/BoardingSectioniOS';
import Container from './Container';
import { Link } from 'phenomic';

const Header = styled.div`
	padding: 1rem 2rem;
	margin-bottom: 1.5rem;
	display: inline-block;
	width: 100%;
	text-align: center;
	&:hover,
	&:active,
	&:focus {
		transform: scale(1.05);
	}
	img {
		width: auto;
		height: 4.2rem;
		margin-bottom: -0.5rem;
	}
`;

const Tagline = styled.span`
	padding: 0.4rem 0 0 0.4rem;
	display: inline-block;
	width: 100%;
	color: #ffffff;
	font-size: 0.7rem;
	text-align: center;
`;

const BoardingiOS = props => (
	<Container {...props}>
		<Header>
			<Link to="/">
				<img src="/assets/logoVertical.svg" alt="Cinuru" />
				<Tagline>{props.head.tagline}</Tagline>
			</Link>
		</Header>
		<BoardingSectioniOS {...props.head} />
	</Container>
);

BoardingiOS.propTypes = {
	head: PropTypes.object.isRequired,
};

export default BoardingiOS;
