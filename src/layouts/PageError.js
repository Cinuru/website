import React, { PropTypes } from "react"
import styled from 'styled-components'

import Container from "./Container"

import Button from '../components/Button'
import { brand } from '../components/style-vars'

const Styles = styled.main`
    padding: 5.5rem 0;
    min-height: 76vh;
    text-align: center;
    h1 {
        font-size: 4rem;
        font-weight: 700;
        color: ${brand};
        margin-bottom: 2rem;
        img {
            width: 3.5rem;
            margin-top: 0.5rem;
        }
    }
`

const ErrorPage = ({error, errorText}) => (
    <Container head={{title: 'Error'}}>
        <Styles>
            <h1><img src="/assets/ooops.png" alt=""/> Uuuups</h1>
            <h2><strong>{error}</strong> {errorText}</h2>
            { error === 404 && <p>Die gewünschte Seite konnte nicht gefunden werden.</p>}
            <Button color={brand} href="mailto:admin@cinuru.com">Teilen Sie uns den Fehler mit</Button>
        </Styles>
    </Container>
)

ErrorPage.propTypes = {
    error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    errorText: PropTypes.string,
}

ErrorPage.defaultProps = {
    error: 404,
    errorText: "Page Not Found",
}

export default ErrorPage
