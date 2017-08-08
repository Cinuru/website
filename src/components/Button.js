import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import { silver } from './style-vars';

const Styles = styled.span`
    cursor: pointer;
    display: inline-block;
    margin: 1rem auto;
    background: linear-gradient(#1ee1d0, #878ddb);
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    box-shadow: 0.125rem 0.125rem 2rem rgba(0, 0, 0, 0.3);
    transition: all 0.5s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0.125rem 0.125rem 2.5rem rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 500px) {
        font-size: 1.3rem;
    }
`;

const Button = ({ href, color, children }) =>
    <Styles
        color={color}
        onClick={() => {
            window.location.href = href;
        }}
    >
        {children}
    </Styles>;

Button.propTypes = {
    href: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.string,
};

Button.defaultProps = {
    color: silver,
};

export default Button;
