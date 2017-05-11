import React from 'react'

import Container from './Container'

import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection'
import DataSection from '../components/DataSection'
import PrivacySection from '../components/PrivacySection'
import ContactSection from '../components/ContactSection'

const HomePage = (props) => (
    <Container { ...props }>
        <div>
            <HeroSection/>
            <ProductSection/>
            <DataSection/>
            <PrivacySection/>
            <ContactSection/>
        </div>
    </Container>
)

export default HomePage
