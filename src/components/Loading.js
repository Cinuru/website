import React from "react"
import Helmet from "react-helmet"
import TopBarProgressIndicator from "react-topbar-progress-indicator"

import { gold } from './styles'

TopBarProgressIndicator.config({
    barColors: {
        "0": gold,
        "1.0": gold,
    },
    barThickness: 2,
    shadowBlur: 0,
})

const Loading = () => (
    <div>
        <Helmet title={ "Loading..." }/>
        <TopBarProgressIndicator />
    </div>
)

export default Loading
