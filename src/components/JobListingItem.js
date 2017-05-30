import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { Link } from 'phenomic'

import { gold } from './style-vars'

const Wrapper = styled.div`
    cursor: pointer;
    max-width: 20rem;
    background: ${gold};
    padding: 0.7rem;
    border-radius: 1rem;
    text-align: center;
    h3 {
        font-size: 1.4rem;
        font-weight: 700;
        font-style: italic;
        text-transform: none;
        letter-spacing: 0.02em;
        margin: 0;
        color: white;
    }
`

const JobListingItem = ({ title, __url }) => (
    <Link to={__url}>
        <Wrapper>
            <h3>{title}</h3>
        </Wrapper>
    </Link>
)

JobListingItem.propTypes = {
    title: PropTypes.string,
    __url: PropTypes.string
}

export default JobListingItem
