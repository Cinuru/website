import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import Container from './Container';
import { Link } from 'phenomic';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 35rem;
	margin: 0 auto;
	padding: 2rem;

	text-align: center;
	color: white;

	.logo {
		height: 9rem;
	}
	.tagline {
		margin-top: -1rem;
	}
	p {
		font-size: 1.5rem;
		font-weight: 400;
	}
	.mascot {
		width: 12rem;
		margin: 2rem 0;
	}
	.title {
		font-size: 2rem;
		font-weight: 700;
	}
	.store-links {
		margin-top: -1rem;
		display: flex;
	}
	.button {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		padding: 0.5rem 1rem;
		background: rgba(255, 255, 255, 0.15);
		margin: 1rem;
		border-radius: 0.5rem;
		font-weight: 600;
		min-width: 11rem;
		&.large {
			height: 4rem;
		}
		transition: all 0.15s;
		&:hover,
		&:active,
		&:focus {
			background: rgba(255, 255, 255, 0.25);
			transform: scale(1.1);
		}
		img {
			width: 2.5rem;
			height: auto;
			margin-right: 0.5rem;
		}
	}
	.feedback {
		margin-top: 4rem;
		p {
			margin: 0;
		}
	}
	.cinemas {
		margin-top: 4rem;
		border-top: 0.15rem solid white;
		width: 120%;
		p {
			font-size: 1.25rem;
		}
	}
`;

const HomePage = ({
	head: {
		description,
		tagline,
		mascotImg,
		callToAction,
		playStoreLink,
		feedbackCTA,
		feedbackMail,
		feedback,
		cinemaHeader,
		cinemas,
		...head
	},
	...props
}) => (
	<Container {...{ head, ...props }}>
		<Wrapper>
			<img className="logo" src="/assets/logoVertical.svg" alt="Cinuru" />
			<p className="tagline">{tagline}</p>
			<div>{description.map((text, i) => <p key={i}>{text}</p>)}</div>
			<img className="mascot" src={mascotImg} alt="" />
			<p className="title">{callToAction}</p>
			<div className="store-links">
				<Link to="/testflight-signup" className="button large">
					<img src="/assets/apple.svg" alt="" />
					<span>iOS</span>
				</Link>
				<a href={playStoreLink} className="button large">
					<img src="/assets/android.svg" alt="" />
					<span>Android</span>
				</a>
			</div>
			<div className="feedback">
				<p>
					<strong>{feedback[0]}</strong>
				</p>
				{feedback.splice(1).map((text, i) => <p key={i}>{text}</p>)}
				<a className="button" href={`mailto:${feedbackMail}`}>
					{feedbackCTA}
				</a>
			</div>

			<div className="cinemas">
				<p>{cinemaHeader}</p>
				{cinemas.map((cinema, i) => <p key={i}>{cinema}</p>)}
			</div>
		</Wrapper>
	</Container>
);

HomePage.propTypes = {
	head: PropTypes.shape({
		description: PropTypes.arrayOf(PropTypes.string),
		tagline: PropTypes.string,
		mascotImg: PropTypes.string,
		callToAction: PropTypes.string,
		playStoreLink: PropTypes.string,
		feedbackCTA: PropTypes.string,
		feedbackMail: PropTypes.string,
		feedback: PropTypes.arrayOf(PropTypes.string),
		cinemaHeader: PropTypes.string,
		cinemas: PropTypes.arrayOf(PropTypes.string),
	}),
};

export default HomePage;
