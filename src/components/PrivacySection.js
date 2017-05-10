import React from 'react'
import styled from 'styled-components'

import { container } from './styles'

const Styles = styled.section`
    ${container}
    margin-top: 12rem;
    text-align: center;
    max-width: 45rem;
    img {
        width: 5em;
        margin-bottom: 1rem;
    }
    @media(max-width: 800px) {
        margin-top: 7rem;
    }
    @media(max-width: 600px) {
        margin-top: 5rem;
        padding: 0 2rem;
        h3 {
            font-size: 1.3rem;
            max-width: 24rem;
            margin: 0 auto;
        }
    }
`

const PrivacySection = () => (
    <Styles>
        <img src="assets/privacy.svg" alt="privacy"/>
        <h1>Beziehungen erfordern Vertrauen</h1>
        <p>Cinuru ermöglicht es dem Besucher seine Meinung abzugeben und mit seinem Kino in Kontakt zu treten. Oberste Prämisse bei der Auswertung der Informationen ist die Zustimmung der einzelnen Nutzer sowie eine Offenheit beim Umgang mit den Daten.</p>
        <h3>Cinuru steht für eine vertrauensvolle Beziehung zwischen Kino und Besucher. </h3>
    </Styles>
)

export default PrivacySection
