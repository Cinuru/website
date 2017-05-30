import React from 'react'
import PropTypes from 'proptypes'
import { BodyContainer } from 'phenomic'
import styled from 'styled-components'
import FileIcon from 'react-icons/lib/fa/file-pdf-o'

import { gold, silver } from '../components/style-vars'
import Container from './Container'
import Article from '../components/Article'

const Wrapper = styled.div`
    article {
        max-width: 40rem;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 4rem;
    }
    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
    }
    h2 {
        font-weight: 900;
        color: ${gold};
        margin-bottom: 4rem;
    }
    .overview {
        font-size: 1.2rem;
        line-height: 2rem;
        text-align: left;
        .label {
            display: inline-block;
            color: ${gold};
            width: 10rem;
            font-weight: 900;
            text-transform: uppercase;
            text-align: right;
            margin-right: 1rem;
        }
        .text {
            text-align: left;
        }
    }
    .job-description {
        margin: 4rem 0;
        h3 {
            font-weight: 500;
            font-style: normal;
            font-size: 1.2rem;
            max-width: 14rem;
            margin: 0.5rem auto;
        }
    }
    .file {
        display: block;
        width: 16rem;
        margin: 0 auto;
        padding: 0.25rem 1rem 1rem 1rem;
        border-radius: 1rem;
        color: ${gold};
        font-size: 1.3rem;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        &:hover {
            background: #F5F5F5;
        }
        .icon {
            width: 4rem;
            height: 4rem;
            margin: 1rem auto;
        }
    }
    iframe {
        width: 100%;
        height: 30rem;
        border: none;
        margin-bottom: -6rem;
    }
`

const JobPage = ({ head: { title, subtitle, overview, typeform, jobDescription, ...head }, body, ...props }) => (
    <Container {...{ head, ...props }}>
        <Wrapper>
            <article>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <BodyContainer>
                    {props.isLoading ? '' : body}
                </BodyContainer>
                <div>
                    {Object.keys(overview).map(label => (
                        <div className="overview">
                            <span className="label">{label}</span>
                            <span className="description">{overview[label]}</span>
                        </div>
                    ))}
                </div>
                <div className="job-description">
                    <h3>Download job description to learn more:</h3>
                    <a className="file" href={jobDescription} target="_blank">
                        <div className="icon"><FileIcon color={gold} width="100%" height="100%" /></div>
                        <div className="text">Job Description</div>
                    </a>
                </div>
            </article>
            <iframe src={typeform} />
        </Wrapper>
    </Container>
)

JobPage.propTypes = {
    props: PropTypes.any,
    head: PropTypes.object,
    body: PropTypes.string,
    isLoading: PropTypes.bool
}

export default JobPage
