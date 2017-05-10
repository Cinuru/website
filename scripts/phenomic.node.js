import phenomicStatic from "phenomic/lib/static"

import routes from "../src/routes.js"
import metadata from "./metadata.js"
import store from "./store.js"

export default (options) => (
    phenomicStatic({ ...options, metadata, routes, store })
)
