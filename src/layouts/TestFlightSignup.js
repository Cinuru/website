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
		height: 45rem;
		@media (max-width: 700px) {
			height: 54rem;
		}
		@media (max-width: 420px) {
			height: 63rem;
		}
	}
`;

const TestFlightSignup = ({ head: { title, formIframe, disclaimer, ...head }, ...props }) => (
	<Container {...{ head, ...props }}>
		<Wrapper>
			<h1>{title}</h1>
	<div>Teilweise kommt es gerade zu Schwierigkeiten beim Versenden der Einladungen. Falls dir kein Teilnahmeformular angezeigt wird, sende uns bitte eine E-Mail an support@cinuru.com und wir werden dich umgehend einladen.</div>
	
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
