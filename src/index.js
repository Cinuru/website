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

const GOOGLE_ANALYTICS_UA = 'UA-90630835-3'

// generate autotrack with
// autotrack -o content/assets/autotrack.js -p urlChangeTracker,cleanUrlTracker,outboundLinkTracker
// see https://github.com/MoOx/phenomic/issues/428
// if (typeof window !== 'undefined') {
//     window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
//     /* global ga: true */
//     ga('create', GOOGLE_ANALYTICS_UA, 'auto')
//     ga('require', 'urlChangeTracker')
//     ga('require', 'cleanUrlTracker')
//     ga('require', 'outboundLinkTracker')
//     // log initial page
//     ga('send', 'pageview')
// }

const AppContainer = ({children}) => (
    <StylesContainer>
        <Helmet>
            <link rel="shortcut icon" href="/assets/favicon.png"/>
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated"></script>
            <script async src="https://www.google-analytics.com/analytics.js"></script>
            {/* <script async src="/assets/autotrack.js"></script> */}
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
