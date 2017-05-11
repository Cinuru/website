import React from 'react'
import PropTypes from 'proptypes'
import { BodyContainer } from 'phenomic'

import Container from './Container'

import Article from '../components/Article'

const Page = (props) => (
    <Container { ...props }>
        <Article title={props.head.title} heroImg={props.head.heroImg}>
            <BodyContainer>
                {props.isLoading ? '' : props.body}
            </BodyContainer>
        </Article>
    </Container>
)

Page.propTypes = {
    head: PropTypes.object,
    body: PropTypes.string,
    isLoading: PropTypes.bool
}

export default Page
