import React from 'react'
import styled from 'styled-components'

import Container from './Container'

import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection'
import DataSection from '../components/DataSection'
import PrivacySection from '../components/PrivacySection'

import Button from '../components/Button'
import { gold } from '../components/styles'

const Styles = styled.main`
    padding: 5.5rem 0;
    min-height: 90vh;
    @media(max-width: 420px) {
        padding: 3.5rem 0;
    }

    .calltoaction {
        margin-top: 4rem;
        text-align: center;
    }
`

const HomePage = ({head, isLoading}) => (
    <Container {...{head}}>
        {isLoading ? (
            <Loading />
        ) : (
            <Styles>
                <HeroSection/>
                <ProductSection/>
                <DataSection/>
                <PrivacySection/>
                <section className="calltoaction">
                    <Button color={gold} href="mailto:contact@cinuru.com">Kontaktieren Sie uns</Button>
                </section>
            </Styles>
        )}
    </Container>
)

export default HomePage
