import React from 'react'
import styled from 'styled-components'

import Page from './Page'
import { clearfix, gold } from '../components/styles'

const Styles = styled.div`
    .team-member {
        ${clearfix}
        margin-bottom: 3rem;
        position: relative;
        min-height: 18rem;
        img {
            position: absolute;
            right: 0;
            top: 1rem;
            width: 14rem;
        }
        div {
            width: 33rem;
        }
        h2 {
            margin: 0;
        }
        h3 {
            font-weight: 900;
            color: ${gold};
        }
        @media(max-width: 850px) {
            img {
                width: 30%;
            }
            div {
                width: 65%;
            }
        }
        @media(max-width: 600px) {
            min-height: 0;
            margin-top: 8.5rem;
            &.first {
                margin-top: 4rem !important;
            }
            div {
                width: 100%;
            }
            img {
                top: -8rem;
                right: 3rem;
                max-width: 9.5rem;
                width: 100%;
            }
        }
        @media(max-width: 350px) {
            img {
                right: 2rem;
            }
        }
    }
`

const AboutPage = (props) => (
    <Styles>
        <Page {...props}/>
    </Styles>
)

export default AboutPage
