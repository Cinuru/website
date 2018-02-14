import React from 'react';
import PropTypes from 'proptypes';

import Container from './Container';

import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import DataSection from '../components/DataSection';
import PrivacySection from '../components/PrivacySection';
import ContactSection from '../components/ContactSection';

const Cinema = props => (
	<Container {...props}>
		<div>
			<HeroSection {...props.head.sections.hero} />
			<ProductSection {...props.head.sections.product} />
			<DataSection {...props.head.sections.data} />
			<PrivacySection {...props.head.sections.privacy} />
			<ContactSection {...props.head.sections.contact} />
		</div>
	</Container>
);

Cinema.propTypes = {
	head: PropTypes.object.isRequired,
};

export default Cinema;
