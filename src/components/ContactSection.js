import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'

import Button from './Button'
import { brand, container } from './style-vars'

const Styles = styled.section`
    ${container}
    margin-top: 4rem;
    text-align: center;
`

const ContactSection = ({cta}) => (
    <Styles>
        <Button color={brand} href="mailto:contact@cinuru.com">{cta}</Button>
    </Styles>
)

ContactSection.propTypes = {
    cta: PropTypes.string.isRequired
}

export default ContactSection
