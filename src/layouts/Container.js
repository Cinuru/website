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

const pageUrl = 'https://cinuru.com'

const defaultMeta = {
    description: 'Cinuru Research: Datengetriebenes Customer Relationship Management für Kinos. Lernen Sie Ihre Besucher kennen und starten Sie eine Beziehung.',
    image: 'assets/thumb.jpg',
    url: 'https://cinuru.com/',
    title: 'Cinuru CRM für Kinos'
}

const Container = ({ head, children, isLoading, __url }) =>
    isLoading
        ? <Loading />
        : <div>
              <Helmet>
                  <title>{`Cinuru | ${head.pageTitle || head.metaTitle || head.title}`}</title>
                  <meta name="description" content={head.metaDescription || defaultMeta.description} />

                  <meta name="twitter:card" value="summary" />
                  <meta name="twitter:site" content="@cinuru" />
                  <meta name="twitter:creator" content="@cinuru" />
                  <meta name="twitter:image" content={`${pageUrl}${head.metaImage || defaultMeta.image}`} />

                  <meta property="og:title" content={head.metaTitle || defaultMeta.title} />
                  <meta property="og:type" content="article" />
                  <meta property="og:url" content={`${pageUrl}${head.metaUrl || ''}`} />
                  <meta property="og:image" content={head.metaImage || defaultMeta.image} />
                  <meta property="og:description" content={head.metaDescription || defaultMeta.description} />
              </Helmet>
              <Header route={__url} />
              <Main>
                  {children}
              </Main>
              <Footer />
          </div>

Container.propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.node,
    head: PropTypes.object.isRequired,
    __url: PropTypes.string
}

export default Container
