import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import Container from './Container';

const Wrapper = styled.div`
	max-width: 30rem;
	margin: 0 auto;
	text-align: center;
	padding: 2rem 1rem;

	iframe {
		width: 100%;
		height: 15rem;
		@media (max-width: 700px) {
			height: 18rem;
		}
		@media (max-width: 420px) {
			height: 21rem;
		}
	}
`;

const TestFlightSignup = ({ head: { title, formIframe, disclaimer, ...head }, ...props }) => (
	<Container {...{ head, ...props }}>
		<Wrapper>
			<h1>{title}</h1>
			<iframe src={formIframe} allowTransparency="true" />
			<p>{disclaimer}</p>
		</Wrapper>
	</Container>
);

TestFlightSignup.propTypes = {
	head: PropTypes.shape({
		title: PropTypes.string,
		formIframe: PropTypes.string,
		disclaimer: PropTypes.string,
	}),
};

export default TestFlightSignup;
