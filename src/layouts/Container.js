import React from 'react';
import PropTypes from 'proptypes';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Main = styled.main`
	padding: 5.5rem 0;
	min-height: 90vh;
	background: ${p => (p.isHome ? 'linear-gradient(to bottom, #2dd7d3, #8c7ddd)' : 'white')};
	@media (max-width: 420px) {
		padding: 3.5rem 0;
	}
	.phenomic-HeadingAnchor {
		display: none;
	}
`;

const pageUrl = 'https://cinuru.com';

const defaultMeta = {
	description:
		'Mit deiner persönlichen Kinoapp kannst du deinen Kinobesuch einfach und unkompliziert planen.',
	image: '/assets/thumb.jpg',
	url: '/',
	title: 'Mit Cinuru wirst Du zum Kinoguru.',
};

const Container = ({ head, children, isLoading, __url }) =>
	isLoading ? (
		<Loading />
	) : (
		<div>
			<Helmet>
				<title>{`Cinuru | ${head.pageTitle || head.metaTitle || head.title}`}</title>
				<meta name="description" content={head.metaDescription || defaultMeta.description} />

				<meta name="twitter:card" value="summary" />
				<meta name="twitter:site" content="@cinuru" />
				<meta name="twitter:creator" content="@cinuru" />
				<meta
					name="twitter:image"
					content={`${pageUrl}${head.metaImage || defaultMeta.image}`}
				/>

				<meta property="og:title" content={head.metaTitle || defaultMeta.title} />
				<meta property="og:type" content="article" />
				<meta property="og:url" content={`${pageUrl}${head.metaUrl || '/social'}`} />
				<meta
					property="og:image"
					content={`${pageUrl}${head.metaImage || defaultMeta.image}`}
				/>
				<meta
					property="og:description"
					content={head.metaDescription || defaultMeta.description}
				/>
			</Helmet>
			<Header isHome={head.layout === 'HomePage'} route={__url} />
			<Main isHome={head.layout === 'HomePage'}>{children}</Main>
			<Footer />
		</div>
	);

Container.propTypes = {
	isLoading: PropTypes.bool,
	children: PropTypes.node,
	head: PropTypes.object.isRequired,
	__url: PropTypes.string,
};

export default Container;
