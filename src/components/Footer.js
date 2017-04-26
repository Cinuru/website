import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
`

const Footer = () => (
    <Wrapper>
        <p>
            &#x24B8; Cinuru Research UG (haftungsbeschränkt) <br/>
            c/o Startbüro Filmuniversität | August-Bebel-Str. 26 | 14482 Potsdam <br/>
            info@cinuru.com
        </p>
    </Wrapper>
)

export default Footer
