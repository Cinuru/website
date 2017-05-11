import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import { gold, container } from './style-vars'

const Styles = styled.section`
    ${container}
    margin-top: 4rem;
    text-align: center;
`

const ContactSection = () => (
    <Styles>
        <Button color={gold} href="mailto:contact@cinuru.com">Kontaktieren Sie uns</Button>
    </Styles>
)

export default ContactSection
