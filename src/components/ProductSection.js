import React from 'react'
import styled from 'styled-components'

import { silver, clearfix, container } from './styles'

const Styles = styled.section`
    background: ${silver};
    padding: 3rem;
    margin-bottom: 4rem;
    .container {
        ${container}
    }
    h1 {
        text-align: center;
    }
    .columns {
        max-width: 40rem;
        margin: 2rem auto 0 auto;
        ${clearfix}
        .description {
            float: left;
            margin-left: 2rem;
            width: 17rem;
            text-align: justify;
        }
        .image {
            float: left;
            display: inline-block;
            width: 12rem;
            margin: -1rem 0 -2rem 4rem;
        }
    }
    @media(max-width: 750px) {
        padding: 3rem 1rem;
    }
    @media(max-width: 550px) {
        .columns {
            .description {
                text-align: left;
            }
            .image {
                margin-left: 1.5rem;
                margin-top: 0;
            }
        }
    }
    @media(max-width: 500px) {
        padding: 2rem 0;
        .columns {
            margin-top: 1rem;
            .description {
                width: 16.5rem;
            }
            .image {
                margin-top: 0;
            }
        }
    }
    @media(max-width: 450px) {
        .columns {
            .description {
                margin-left: 1rem;
            }
            .image {
                margin-top: 0.5rem;
                width: 11rem;
            }
        }
    }
    @media(max-width: 420px) {
        .columns {
            .description {
                margin-left: 1.5rem;
            }
            .image {
                margin-top: 0;
                margin-left: 1rem;
                width: 12rem;
            }
        }
    }
    @media(max-width: 375px) {
        padding: 2rem 0 1rem 0;
        h1 {
            font-size: 1.3rem;
        }
        p {
            font-size: 1rem;
        }
        .columns {
            .description {
                margin-left: 1rem;
                width: 14.5rem;
            }
            .image {
                margin-top: 1.5rem;
                margin-left: 1rem;
                width: 10rem;
            }
        }
    }
`

export default () => (
    <Styles>
        <div className="container">
            <h1>Machen Sie Ihre Besucher zu Kinofreunden</h1>
            <div className="columns">
                <div className="description">
                    <p>Ein spielerisches Kundenbindungs-Programm direkt auf dem Smartphone.</p>
                    <p>Mit Cinuru können Kinobesucher Filme und Trailer bewerten, Punkte sammeln und gegen attraktive Prämien einlösen. Es entsteht so ein direkter Kanal zu Ihren Besuchern, über den Sie diese an ihre Lieblingsfilme zum Filmstart erinnern und sie mit besonderen Angeboten und Events ins Kino einladen können.</p>
                </div>
                <div className="image">
                    <img src="assets/app.svg" alt="app"/>
                </div>
            </div>
        </div>
    </Styles>
)
