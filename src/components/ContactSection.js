import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'

import Button from './Button'
import { gold, container } from './style-vars'

const Styles = styled.section`
    ${container}
    margin-top: 4rem;
    text-align: center;
`

const ContactSection = ({cta}) => (
    <Styles>
        <Button color={gold} href="mailto:contact@cinuru.com">{cta}</Button>
    </Styles>
)

ContactSection.propTypes = {
    cta: PropTypes.string.isRequired
}

export default ContactSection
