import React from "react"
import Helmet from "react-helmet"
import styleSheet from "styled-components/lib/models/StyleSheet"

const ServerSideStyles = () => {
    if (typeof window !== "undefined") {
        return null
    } else {
        return <Helmet style={[{
            type: "text/css",
            cssText: styleSheet.rules().map(rule => rule.cssText).join("\n")
        }]}/>
    }
}

export default ServerSideStyles
