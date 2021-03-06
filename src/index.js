import React from 'react';
import PropTypes from 'proptypes';
import Helmet from 'react-helmet';
import { Route } from 'react-router';
import { PageContainer } from 'phenomic';

import StylesContainer from './styles';

import Page from './layouts/Page';
import PageError from './layouts/PageError';
import HomePage from './layouts/Homepage';
import Cinema from './layouts/Cinema';
import TestFlightSignup from './layouts/TestFlightSignup';
import AboutPage from './layouts/AboutPage';
import JobsIndexPage from './layouts/JobsIndexPage';
import JobPage from './layouts/JobPage';

const GOOGLE_ANALYTICS_UA = 'UA-90630835-3';

// generate autotrack with
// autotrack -o content/assets/autotrack.js -p urlChangeTracker,cleanUrlTracker,outboundLinkTracker
// see https://github.com/MoOx/phenomic/issues/428
if (
	typeof window !== 'undefined' &&
	location.hostname !== 'localhost' &&
	location.hostname !== '127.0.0.1'
) {
	// enable google analytics optout, invoked from impressum.md
	const gaDisableCookieStr = `ga-disable-${GOOGLE_ANALYTICS_UA}`;
	window.gaOptout = () => {
		document.cookie = `${gaDisableCookieStr}=true; expires=Thu 31 Dec 2099 23:59:59 UTC; path=/`;
		window[gaDisableCookieStr] = true;
	};
	if (document.cookie.indexOf(`${gaDisableCookieStr}=true`) >= 0) {
		window[gaDisableCookieStr] = true;
	}
	// prettier-ignore
	window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)}
	ga.l = +new Date();
	/* global ga: true */
	ga('create', GOOGLE_ANALYTICS_UA, 'auto');
	ga('require', 'urlChangeTracker');
	ga('require', 'cleanUrlTracker');
	ga('require', 'outboundLinkTracker');
	// log initial page
	ga('send', 'pageview');
}

const AppContainer = ({ children }) => (
	<StylesContainer>
		<Helmet>
			<link rel="shortcut icon" href="/assets/favicon.png" />
			<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated" />
			<script async src="https://www.google-analytics.com/analytics.js" />
			<script async src="/assets/autotrack.js" />
		</Helmet>
		{children}
	</StylesContainer>
);

AppContainer.propTypes = {
	children: PropTypes.node,
};

const RoutesContainer = props => (
	<PageContainer
		{...props}
		layouts={{
			Page,
			PageError,
			HomePage,
			Cinema,
			TestFlightSignup,
			AboutPage,
			JobsIndexPage,
			JobPage,
		}}
	/>
);

export default (
	<Route component={AppContainer}>
		<Route path="*" component={RoutesContainer} />
	</Route>
);
