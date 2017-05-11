import React from "react"
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { transparentize } from 'polished'

import { silver, gray } from './style-vars'

const Styles = styled.span`
    display: inline-block;
    margin: 1rem auto;
    background: ${props => props.color};
    color: ${gray};
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    box-shadow: 0.125rem 0.125rem 2rem ${props => transparentize(0.2, props.color)}
    transition: all 0.5s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0.125rem 0.125rem 2.5rem ${props => transparentize(0.2, props.color)}
    }
    @media(max-width: 500px) {
        font-size: 1.3rem;
    }
`

const Button = ({href, color, children}) => (
    <a href={href}>
        <Styles color={color}>
            {children}
        </Styles>
    </a>
)

Button.propTypes = {
    href: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.string
}

Button.defaultProps = {
    color: silver
}

export default Button
