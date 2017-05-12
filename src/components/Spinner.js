import React from 'react'
import PropTypes from 'proptypes'
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
    0%, 100% {
        transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
    }
`;

const Styles = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    position: relative;
    margin: 1rem auto;

    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${props => props.color};
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: ${bounce} ${props => props.duration}s infinite ease-in-out;
    }

    .double-bounce2 {
        animation-delay: ${props => -props.duration/2}s;
    }
`

const Spinner = ({color, size, duration, ...props}) => (
    <Styles color={color} size={size} duration={duration} { ...props }>
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
    </Styles>
)

Spinner.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
}

Spinner.defaultProps = {
    color: 'black',
    size: '3rem',
    duration: 2
}

export default Spinner
