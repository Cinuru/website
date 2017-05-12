import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'

import { container } from './style-vars'

const Styles = styled.section`
    ${container}
    margin-top: 12rem;
    text-align: center;
    max-width: 45rem;
    img {
        width: 5em;
        margin-bottom: 1rem;
    }
    @media(max-width: 800px) {
        margin-top: 7rem;
    }
    @media(max-width: 600px) {
        margin-top: 5rem;
        padding: 0 2rem;
        h3 {
            font-size: 1.3rem;
            max-width: 24rem;
            margin: 0 auto;
        }
    }
`

const PrivacySection = ({title, img, text, highlight}) => (
    <Styles>
        <img src={img} alt="privacy"/>
        <h1>{title}</h1>
        {text.map((p, i) => <p key={i}>{p}</p>)}
        <h3>{highlight}</h3>
    </Styles>
)

PrivacySection.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.tring).isRequired,
    highlight: PropTypes.string.isRequired
}

export default PrivacySection
