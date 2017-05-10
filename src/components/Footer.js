import React from "react"
import styled from 'styled-components'
import { Link } from "phenomic"

import { silver } from './styles'

const Wrapper = styled.footer`
    background: black;
    color: ${silver};
    padding: 2rem 0 0 0;
    text-align: center;
    font-style: italic;
    letter-spacing: 0.025em;
    .pages {
        margin-bottom: 2rem;
        font-weight: 300;
        ul {
            list-style-type: none;
            padding: 0;
            li {
                display: inline-block;
                margin: 0 1rem;
                transition: all 0.15s;
                &:hover, &:active, &:focus {
                    transform: scale(1.1);
                }
            }
        }
    }
    .address {
        * {
            font-size: 0.75rem;
        }
    }
    .supporters {
        margin-top: 2rem;
        h2 {
            font-size: 0.75rem;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }
        img {
            max-width: 50rem;
        }
    }
    .small {
        font-size: 0.6em;
    }
`

const Footer = () => (
    <Wrapper id="nav">
        <div className="container">
            <div className="pages">
                <ul>
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/about">Über Uns</Link></li>
                    <li><a href="mailto:contact@cinuru.com">Kontakt</a></li>
                    <li><Link to="/impressum">Impressum</Link></li>
                </ul>
            </div>
            <div className="address">
                <p>© Cinuru Research UG i.G. <span className="small">(haftungsbeschränkt)</span></p>
                <p>contact@cinuru.com</p>
                <p>℅ Startbüro Filmuniversität<br/>
                    August-Bebel-Str. 26<br/>
                14482 Potsdam</p>
            </div>
            <div className="supporters">
                <h2>Gefördert Durch:</h2>
                <img src="/assets/supporters.png" alt="supported by"/>
            </div>
        </div>
    </Wrapper>
)

export default Footer
