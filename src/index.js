import React from 'react'
import { Route } from 'react-router'
import { PageContainer } from 'phenomic'

import StylesContainer from './styles.js'

import Page from './layouts/Page'
import ErrorPage from './layouts/ErrorPage'
import HomePage from './layouts/Homepage'
import AboutPage from './layouts/AboutPage'

const RoutesContainer = (props) => (
    <PageContainer
        { ...props }
        layouts={{
            Page,
            ErrorPage,
            HomePage,
            AboutPage,
        }}
    />
)

export default (
    <Route component={ StylesContainer }>
        <Route path="*" component={ RoutesContainer } />
    </Route>
)
