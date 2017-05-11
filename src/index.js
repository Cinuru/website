import React from 'react'
import { Route } from 'react-router'
import { PageContainer } from 'phenomic'

import StylesContainer from './styles.js'

import Page from './layouts/Page'
import PageError from './layouts/PageError'
import HomePage from './layouts/Homepage'
import AboutPage from './layouts/AboutPage'

const RoutesContainer = (props) => (
    <PageContainer
        { ...props }
        layouts={{
            Page,
            PageError,
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
