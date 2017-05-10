import React from 'react'
import PropTypes from 'proptypes'
import Helmet from 'react-helmet'

import HeadMeta from '../components/HeadMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = ({head, children}) => (
    <div>
        <HeadMeta/>
        <Helmet title={`Cinuru | ${head.title}`}/>
        <Header/>
        {children}
        <Footer/>
    </div>
)

Container.propTypes = {
    children: PropTypes.node,
    isLoading: PropTypes.bool,
    head: PropTypes.object.isRequired,
    body: PropTypes.string,
    header: PropTypes.element,
    footer: PropTypes.element,
}

export default Container
