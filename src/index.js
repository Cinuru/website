import React from "react"
import PropTypes from "proptypes"
import Helmet from "react-helmet"
import styled, { injectGlobal } from 'styled-components'
import styleSheet from "styled-components/lib/models/StyleSheet"

injectGlobal`
    html, body {
        background: white;
        font-family: Lato;
        font-size: 18px;
        max-width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        @media(max-width: 1000px) {
            font-size: 16px;
        }
        @media(max-width: 700px) {
            font-size: 14px;
        }
        @media(max-width: 420px) {
            font-size: 12px;
        }
    }

    * {
        box-sizing: border-box;
    }

    img {
        width: 100%;
        vertical-align: top;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

const Wrapper = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: 300;
        margin: 0;
        @media(max-width: 600px) {
            font-size: 1.7rem;
        }
        @media(max-width: 500px) {
            font-size: 1.5rem;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 1.5rem;
        font-style: italic;
        margin: 0;
        @media(max-width: 600px) {
            font-size: 1.3rem;
        }
        @media(max-width: 600px) {
            font-size: 1.15rem;
        }
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        font-style: italic;
        margin: 0;
        @media(max-width: 600px) {
            font-size: 1rem;
        }
    }

    p {
        @media(max-width: 600px) {
            font-size: 1.1rem;
        }
    }
`

const ServerSideStyles = () => {
    if (typeof window !== "undefined") {
        return null
    } else {
        return <Helmet style={[{
            type: "text/css",
            cssText: styleSheet.rules().map(rule => rule.cssText).join("\n")
        }]}/>
    }
}

const AppContainer = ({children}) => (
    <Wrapper>
        {children}
        <ServerSideStyles/>
    </Wrapper>
)

AppContainer.propTypes = {
    children: PropTypes.node,
}

export default AppContainer
