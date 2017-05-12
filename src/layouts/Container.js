import React from 'react'
import PropTypes from 'proptypes'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

const Main = styled.main`
    padding: 5.5rem 0;
    min-height: 90vh;
    @media(max-width: 420px) {
        padding: 3.5rem 0;
    }
    .phenomic-HeadingAnchor {
        display: none;
    }
`

const Container = ({head, children, isLoading, __url}) => (
    true ? (
        <Loading />
    ) : (
        <div>
            <Helmet>
                <title>{`Cinuru | ${head.metaTitle || head.title}`}</title>
                <meta name="description" content="Cinuru Research: Datengetriebenes Customer Relationship Management für Kinos. Lernen Sie Ihre Besucher kennen und starten Sie eine Beziehung."/>

                <meta name="twitter:card" value="summary"/>
                <meta name="twitter:site" content="@cinuru"/>
                <meta name="twitter:creator" content="@cinuru"/>
                <meta name="twitter:image" content="https://cinuru.com/assets/thumb.jpg"/>

                <meta property="og:title" content="Cinuru CRM für Kinos" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://cinuru.com/" />
                <meta property="og:image" content="https://cinuru.com/assets/thumb.jpg" />
                <meta property="og:description" content="Cinuru Research: Datengetriebenes Customer Relationship Management für Kinos. Lernen Sie Ihre Besucher kennen und starten Sie eine Beziehung." />
            </Helmet>
            <Header route={__url}/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </div>
    )
)

Container.propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.node,
    head: PropTypes.object.isRequired,
    __url: PropTypes.string
}

export default Container
