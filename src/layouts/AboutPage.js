import React from 'react'
import PropTypes from 'proptypes'
// import styled from 'styled-components'
import { BodyContainer } from 'phenomic'

import Loading from '../components/Loading'
import Container from './Container'

const AboutPage = ({isLoading, head, body}) => {
    return (
        <Container {...{head}}>
            {isLoading ? (
                <Loading />
            ) : (
                <BodyContainer>{body}</BodyContainer>
            )}
        </Container>
    )
}

AboutPage.propTypes = {
    isLoading: PropTypes.bool,
    head: PropTypes.object,
    body: PropTypes.string
}

export default AboutPage
