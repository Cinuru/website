// Hot loading HRM Patch
import "react-hot-loader/patch"
// fetch polyfill
import "whatwg-fetch"
import phenomicClient from "phenomic/lib/client"

import routes from "../src/routes.js"
import store from "./store.js"
import metadata from "./metadata.js"

phenomicClient({ metadata, routes, store })

// md files processed via phenomic-loader to JSON & generate collection
let mdContext = require.context("../content", true, /\.(md|markdown)$/)
mdContext.keys().forEach(mdContext)

// hot loading
if (module.hot) {

    // hot load md
    module.hot.accept(mdContext.id, () => {
        mdContext = require.context("../content", true, /\.(md|markdown)$/)
        const mdHotUpdater = require("phenomic/lib/client/hot-md").default
        const requireUpdate = mdHotUpdater(mdContext, window.__COLLECTION__, store)
        mdContext.keys().forEach(requireUpdate)
    })

    // hot load app
    module.hot.accept(
        [ "../src/routes.js", "./store.js", "./metadata.js" ],
        () => phenomicClient({ metadata, routes, store })
    )
}
