import React from 'react'
import PropTypes from 'proptypes'
import { BodyContainer } from 'phenomic'

import Container from './Container'
import Article from '../components/Article'

const JobPage = props => (
    <Container {...props}>
        <Article title={props.head.title} heroImg={props.head.heroImg}>
            <div>
                <BodyContainer>
                    {props.isLoading ? '' : props.body}
                </BodyContainer>
            </div>
        </Article>
    </Container>
)

JobPage.propTypes = {
    head: PropTypes.object,
    body: PropTypes.string,
    isLoading: PropTypes.bool
}

export default JobPage
