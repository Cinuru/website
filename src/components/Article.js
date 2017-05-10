import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'

const Styles = styled.article`
    max-width: 50rem;
    margin: 0 auto;
    h1 {
        font-size: 2rem;
        font-weight: 900;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        font-style: normal;
    }
    h3 {
        font-size: 0.9rem;
        font-weight: 900;
        font-style: normal;
        text-transform: uppercase;
    }
    h1, h2, h3, p, ul, ol, img {
        margin: 0;
        margin-bottom: 1rem;
    }
    .hero {
        position: relative;
        margin-top: -2rem;
        h1 {
            position: absolute;
            color: gold;
            bottom: 0.25rem;
            left: 1.5rem;
            font-size: 5rem;
            font-weight: 700;
            text-shadow: 0 0 1.5rem rgba(0,0,0,0.75)
        }
    }
    @media(max-width: 850px) {
        padding: 0 2rem;
        .hero h1 {
            font-size: 4rem;
        }
    }
    @media(max-width: 500px) {
        .hero h1 {
            font-size: 3.5rem;
        }
    }
    @media(max-width: 420px) {
        padding: 0;
        h1, h2, h3, p, ul, ol{
            padding: 0 2rem;
        }
        img {
            width: 120%;
            margin-left: -10%;
            margin-bottom: 2rem;
        }
        .hero {
            margin-top: 0;
            h1 {
                bottom: 1.5rem;
                left: 0;
            }
        }
    }
`

const Article = ({children}) => (
    <Styles>
        {children}
    </Styles>
)

Article.propTypes = {
    children: PropTypes.element
}

export default Article
