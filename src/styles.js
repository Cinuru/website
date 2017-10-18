import React from 'react';
import PropTypes from 'proptypes';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import cssmin from 'cssmin';

import { text, darkgray } from './components/style-vars';

injectGlobal`
    @-ms-viewport {
        width: device-width;
    }
    html, body {
        background: white;
        font-family: Roboto;
        font-size: 18px;
        max-width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        color: ${text};
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
    iframe {
        border-width: 0px;
    }
`;

const Styles = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: 300;
        margin: 0;
        @media (max-width: 600px) {
            font-size: 1.7rem;
        }
        @media (max-width: 500px) {
            font-size: 1.5rem;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 1.5rem;
        ${'' /* font-style: italic; */} color: ${darkgray};
        margin: 0;
        @media (max-width: 600px) {
            font-size: 1.3rem;
        }
        @media (max-width: 600px) {
            font-size: 1.15rem;
        }
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        ${'' /* font-style: italic; */} color: ${darkgray};
        margin: 0;
        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }

    p {
        @media (max-width: 600px) {
            font-size: 1.1rem;
        }
    }
`;

// needs to be it's own component for obscrue reasons
const ServerSideStiles = () => {
    if (typeof window === 'undefined') {
        return (
            <style type="text/css">
                {cssmin(styleSheet.rules().map(rule => rule.cssText).join(''))}
            </style>
        );
    } else {
        return null;
    }
};

const StylesContainer = ({ children }) =>
    <Styles>
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:400,700,900"
                rel="stylesheet"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        {children}
        <ServerSideStiles />
    </Styles>;

StylesContainer.propTypes = {
    children: PropTypes.node,
};

export default StylesContainer;
