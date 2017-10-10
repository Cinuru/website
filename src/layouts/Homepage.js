import React from 'react'
import PropTypes from 'proptypes'

import Container from './Container'

const HomePage = props => (
	<Container {...props}>
		<div>
			<iframe src="http://85.214.78.13:3000/" width="100%" height="629px" />
		</div>
	</Container>
);

HomePage.propTypes = {
	head: PropTypes.object.isRequired,
};

export default HomePage;
