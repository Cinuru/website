import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { Link } from 'phenomic'

import { gold } from './style-vars'

const Wrapper = styled.div`
    cursor: pointer;
    background: ${gold};
    max-width: 30rem;
    margin: 2rem auto;
    padding: 1rem  2rem 2rem 2rem;
    border-radius: 1rem;
    text-align: center;
    h3 {
        font-size: 2rem;
        font-weight: 900;
        text-transform: none;
        margin-bottom: 1rem;
        color: white;
    }
    .summary {
        line-height: 1.5rem;
        text-align: left;
        width: 28rem;
        margin: 0 auto;
        h3 {
            font-style: normal;
            font-weight: 900;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }
        .label {
            display: inline-block;
            color: white;
            width: 5rem;
            font-weight: 900;
            text-transform: uppercase;
            text-align: right;
            margin-right: 1rem;
        }
        .description {
            display: inline-block;
            text-align: left;
            width: 22rem;
        }
    }
`

const JobListingItem = ({ title, summary, __url }) => (
    <Link to={__url}>
        <Wrapper>
            <h3>{title}</h3>
            <div className="summary">
                {Object.keys(summary).map(label => (
                    <div>
                        <span className="label">{label}</span>
                        <span className="description">{summary[label]}</span>
                    </div>
                ))}
            </div>
        </Wrapper>
    </Link>
)

JobListingItem.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.objectOf(PropTypes.string),
    __url: PropTypes.string
}

export default JobListingItem
