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
	head: { title, preFormText, postFormText, disclaimer, ...head },
	...props
}) => (
	<Container {...{ head, ...props }}>
		<Wrapper>
			<h1>{title}</h1>
			{preFormText.map((text, i) => <p key={i}>{text}</p>)}
			<form method="POST" action="http://formspree.io/support@cinuru.com">
				<input type="hidden" name="_language" value="de" />
				<input type="text" name="name" placeholder="Dein Name (oder Pseudonym)" /> <br />
				<input type="email" name="email" placeholder="Deine E-Mail Adresse" /> <br />
				<button type="submit">Senden</button>
			</form>
			{postFormText.map((text, i) => <p key={i}>{text}</p>)}
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
