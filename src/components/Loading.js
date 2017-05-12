import React from "react"
import Helmet from "react-helmet"
import styled from 'styled-components'
import TopBarProgressIndicator from "react-topbar-progress-indicator"
import Loader from 'halogen/BounceLoader'

import { gold } from './style-vars'

TopBarProgressIndicator.config({
    barColors: {
        "0": gold,
        "1.0": gold,
    },
    barThickness: 2,
    shadowBlur: 0,
})

const Styles = styled.div`
    display: block;
    height: 100vh;
    text-align: center;
    .loader {
        margin-top: 40vh;
        display: inline-block;
    }
`

const Loading = () => (
    <div>
        <Helmet title={ "Cinuru | Loading..." }/>
        <TopBarProgressIndicator />
        <Styles className="spinner">
            <Loader color={gold} size="4rem" className="loader"/>
        </Styles>
    </div>
)

export default Loading
