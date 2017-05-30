import React from 'react'
import PropTypes from 'proptypes'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import { BodyContainer } from 'phenomic'

import Container from './Container'

import Article from '../components/Article'
import JobListingItem from '../components/JobListingItem'

const getJobs = collection => {
    return enhanceCollection(collection, {
        filter: ({ layout }) => layout === 'JobPage'
    })
}

const JobsIndexPage = (props, { collection }) => (
    <Container {...props}>
        <Article title={props.head.title} heroImg={props.head.heroImg}>
            <div>
                <BodyContainer>
                    {props.isLoading ? '' : props.body}
                </BodyContainer>
                {getJobs(collection).map((props, i) => <JobListingItem {...props} key={i} />)}
            </div>
        </Article>
    </Container>
)

JobsIndexPage.propTypes = {
    head: PropTypes.object,
    body: PropTypes.string,
    isLoading: PropTypes.bool
}

JobsIndexPage.contextTypes = {
    collection: PropTypes.array.isRequired
}

export default JobsIndexPage
