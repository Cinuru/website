import phenomicStatic from 'phenomic/lib/static'

import routes from '../src/'
import metadata from './metadata'
import store from './store'

export default (options) => (
    phenomicStatic({ ...options, metadata, routes, store })
)
