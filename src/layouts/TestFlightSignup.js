import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import Container from './Container';

const Wrapper = styled.div`
	max-width: 30rem;
	margin: 0 auto;
	text-align: center;

	iframe {
		width: 100%;
		height: 15rem;
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
