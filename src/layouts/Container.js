import React from 'react'
import PropTypes from 'proptypes'
import Helmet from 'react-helmet'

import HeadMeta from '../components/HeadMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = ({head, children, __url}) => (
    <div>
        <HeadMeta/>
        <Helmet title={`Cinuru | ${head.title}`}/>
        <Header route={__url}/>
        {children}
        <Footer/>
    </div>
)

Container.propTypes = {
    children: PropTypes.node,
    head: PropTypes.object.isRequired,
    __url: PropTypes.string
}

export default Container
