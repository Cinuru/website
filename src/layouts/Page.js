import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { BodyContainer } from 'phenomic'

import Loading from '../components/Loading'
import Article from '../components/Article'
import Container from './Container'

const Styles = styled.main`
    padding: 5.5rem 0;
    min-height: 90vh;
    @media(max-width: 420px) {
        padding: 3.5rem 0;
    }
    .phenomic-HeadingAnchor {
        display: none;
    }
`

const Page = ({isLoading, body, ...props}) => {
    return (
        <Container {...props}>
            {isLoading ? (
                <Loading />
            ) : (
                <Styles>
                    <Article>
                        <BodyContainer>{body}</BodyContainer>
                    </Article>
                </Styles>
            )}
        </Container>
    )
}

Page.propTypes = {
    isLoading: PropTypes.bool,
    head: PropTypes.object,
    body: PropTypes.string
}

export default Page
