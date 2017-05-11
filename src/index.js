import React from 'react'
import PropTypes from 'proptypes'
import Helmet from 'react-helmet'
import { Route } from 'react-router'
import { PageContainer } from 'phenomic'

import StylesContainer from './styles'

import Page from './layouts/Page'
import PageError from './layouts/PageError'
import HomePage from './layouts/Homepage'
import AboutPage from './layouts/AboutPage'

const AppContainer = ({children}) => (
    <StylesContainer>
        <Helmet>
            <link rel="shortcut icon" href="/assets/favicon.png"/>
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated"></script>
        </Helmet>
        {children}
    </StylesContainer>
)

AppContainer.propTypes = {
    children: PropTypes.node,
}

const RoutesContainer = (props) => (
    <PageContainer { ...props }
        layouts={{
            Page,
            PageError,
            HomePage,
            AboutPage,
        }}
    />
)

export default (
    <Route component={ AppContainer }>
        <Route path="*" component={ RoutesContainer } />
    </Route>
)
