import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import TopBarProgressIndicator from 'react-topbar-progress-indicator';

import Spinner from './Spinner';
import { gray } from './style-vars';

TopBarProgressIndicator.config({
    barColors: {
        '0': '#1EE1D0',
        '1.0': '#916DDE',
    },
    barThickness: 2,
    shadowBlur: 0,
});

const Styles = styled.div`
    display: block;
    height: 100vh;
    text-align: center;
    .loader {
        margin-top: 40vh;
        display: inline-block;
    }
`;

const Loading = () =>
    <div>
        <Helmet title={'Cinuru | Loading...'} />
        <TopBarProgressIndicator />
        <Styles className="spinner">
            <Spinner className="loader" color={gray} size="5rem" duration={3} />
        </Styles>
    </div>;

export default Loading;
