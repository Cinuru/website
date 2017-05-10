import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./"
import Page from "./layouts/Page"
import ErrorPage from "./layouts/ErrorPage"
import HomePage from "./layouts/Homepage"
import AboutPage from './layouts/AboutPage'

const PageContainer = (props) => (
    <PhenomicPageContainer
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
    <Route component={ AppContainer }>
        <Route path="*" component={ PageContainer } />
    </Route>
)
