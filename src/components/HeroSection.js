import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import { gold, container, darkgray } from './style-vars'

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
        width: 18rem;
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
`

const HeroSection = () => (
    <Styles>
        <h1>Wer ist dieses Publikum, von dem alle reden?</h1>
        <div className="image">
            <img src="/assets/hero.svg" alt="hero"/>
        </div>
        <h2>Lernen Sie Ihre Besucher kennen und starten Sie eine Beziehung.</h2>
        <div className="calltoaction">
            <Button href="mailto:contact@cinuru.com" color={gold}>Vereinbaren Sie einen Termin mit uns.</Button>
            <p>Wir sind auf dem Kinokongress - gerne treffen wir uns mit Ihnen.</p>
            <img className="congress-logo" src="/assets/kinokongress.jpg" alt="kinokongress"/>
        </div>
    </Styles>
)

export default HeroSection
