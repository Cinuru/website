import React from 'react'
import styled from 'styled-components'

import { container, clearfix } from './styles'

const Styles = styled.section`
    ${container}
    max-width: 40rem;
    margin-top: 7rem;
    position: relative;
    ${clearfix}
    .image {
        width: 27rem;
        position: absolute;
        right: -8rem;
        top: 0;
    }
    h1, .p1, .p2, h3 {
        margin-left: -7rem;
    }
    h1 {
        padding-right: 10rem;
    }
    .p1 {
        margin-top: 2rem;
        padding-right: 15rem;
    }
    .p2 {
        padding-right: 18rem;
    }
    h3 {
        padding-right: 22rem;
        margin-top: 2rem;
    }
    @media(max-width: 950px) {
        .image {
            right: -4rem;
            top: 2rem;
        }
        h1, .p1, .p2, h3 {
            margin-left: -4rem;
            padding-right: 20rem;
        }
        .p2 {
            padding-right: 24rem;
        }
        h3 {
            padding-right: 28rem;
        }
    }
    @media(max-width: 800px) {
        .image {
            right: -1.5rem;
            top: 1.5rem;
        }
        h1, .p1, .p2, h3 {
            margin-left: 0;
            padding-right: 18rem;
        }
        .p1 {
            padding-right: 20rem;
        }
        .p2 {
            padding-right: 27rem;
        }
        h3 {
            padding-right: 17rem;
        }
    }
    @media(max-width: 600px) {
        margin-top: 0;
        padding: 0 2rem;
        text-align: center;
        .image {
            position: relative;
            width: 100%;
            max-width: 25rem;
            margin: 1rem auto -1rem auto;
            top: auto;
            right: auto;
        }
        h1, .p1, .p2, h3 {
            margin-left: 0;
            padding-right: 0;
        }
        h3 {
            font-size: 1.3rem;
        }
    }
`

const DataSection = () => (
    <Styles id="data">
        <h1>Datenbasiertes Customer Relationship Management für Kinos</h1>
        <div className="image">
            <img src="assets/data.svg" alt="data-cycle"/>
        </div>
        <p className="p1">Digitale Schnittstellen zwischen Kino und Besucher ermöglichen den Informationsaustausch entlang der gesamten Customer Journey. Lernen Sie Ihre Stammkunden kennen und gewinnen Sie neue.</p>
        <p className="p2">Kern des Tools ist ein White Label Kundenbindungs- Programm für ihr Kino. Hiermit können Ihre Besucher Trailer und Filme bewerten, Punkte sammeln und in attraktive Prämien einlösen. </p>
        <h3>Wir helfen Ihnen die Daten auszuwerten und so mit Ihren Besuchern in Kontakt zu treten.</h3>
    </Styles>
)

export default DataSection
