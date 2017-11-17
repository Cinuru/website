import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import Container from './Container';

import { gray } from '../components/style-vars';

const Wrapper = styled.div`
	max-width: 30rem;
	margin: 0 auto;
	text-align: center;
	padding: 2rem 1rem;

	.disclaimer {
		color: ${gray};
		margin-top: 4rem;
	}

	iframe {
		width: 100%;
		height: 40rem;
		@media (max-width: 700px) {
			height: 50rem;
		}
		@media (max-width: 420px) {
			height: 58rem;
		}
	}
`;

const TestFlightSignup = ({
	head: { title, preFormText, postFormText, formIframe, disclaimer, ...head },
	...props
}) => (
	<Container {...{ head, ...props }}>
		<Wrapper>
			<h1>{title}</h1>
	<div>Leider gibt es aktuell Probleme mit dem automatisierten Hinzufügen von Testern. Wenn du die App testen möchtest sende uns bitte eine Email an <a href="support@cinuru.com">support@cinuru.com</a>.
	Wir bitten um Entschuldigung für die Unanehmlichkeiten und arbeiten mit Hockdurck an einer Lösung.
	</div>
			
			<p className="disclaimer">{disclaimer}</p>
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
