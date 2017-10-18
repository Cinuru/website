import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import Button from './Button';
import { brand, container, darkgray } from './style-vars';

const Styles = styled.section`
    ${container}
    padding: 2rem 3rem;
    text-align: center;
    margin-bottom: 2rem;
    .image {
        margin: 2rem 0 1rem 0;
    }
    .calltoaction {
        margin-top: 2rem;
    }
    p {
        text-transform: uppercase;
        font-size: 0.9rem;
        max-width: 40rem;
        font-weight: 700;
        color: ${darkgray};
        margin: 0.5rem auto 0 auto;
    }
    .congress-logo {
        width: 10rem;
        margin-top: 1rem;
    }
    @media(max-width: 750px) {
        padding: 2rem 1rem;
    }
    @media(max-width: 420px) {
        h1 {
            font-size: 2.2rem
            max-width: 26rem;
            margin: 0 auto;
        }
        h2 {
            font-size: 1.5rem;
            max-width: 24rem;
            margin: 0 auto;
        }
        .image {
            width: 190%;
            margin-left: -50%;
        }
        p {
            font-size: 1.2rem;
            width: 24rem;
        }
        .congress-logo {
            width: 12rem;
        }
    }
`;

const HeroSection = ({ title, img, highlight, cta }) => (
	<Styles>
		<h1>{title}</h1>
		<div className="image">
			<img src={img} alt="hero" />
		</div>
		<h2>{highlight}</h2>
		<div className="calltoaction">
			<Button href="mailto:contact@cinuru.com" color={brand}>
				{cta}
			</Button>
			{/* <p>
				Wir sind auf der Filmkunstmesse in Leipzig. Besuchen Sie uns Donnerstag zwischen 12:00
				und 14:00 in der Business Lounge oder machen Sie einen Termin aus.
			</p>
			<img className="congress-logo" src="/assets/filmkunstmesse.svg" alt="filmkunstmesse" /> */}
		</div>
	</Styles>
);

HeroSection.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	highlight: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
};

export default HeroSection;
