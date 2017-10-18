import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

const Styles = styled.article`
    max-width: 50rem;
    margin: 0 auto;
    h1 {
        font-size: 2rem;
        font-weight: 900;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        font-style: normal;
    }
    h3 {
        font-size: 0.9rem;
        font-weight: 900;
        font-style: normal;
        text-transform: uppercase;
    }
    h1,
    h2,
    h3,
    p,
    ul,
    ol,
    img {
        margin: 0;
        margin-bottom: 1rem;
    }
    .hero {
        position: relative;
        margin-top: -2rem;
        h1 {
            position: absolute;
            color: white;
            bottom: 0.25rem;
            left: 1.5rem;
            font-size: 5rem;
            font-weight: 700;
            background: -webkit-linear-gradient(#1ee1d0 20%, #916dde 95%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .legibility-gradient {
            position: absolute;
            bottom: 1rem;
            width: 100%;
            height: 8rem;
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
        }
    }
    @media (max-width: 850px) {
        padding: 0 2rem;
        .hero h1 {
            font-size: 4rem;
        }
    }
    @media (max-width: 500px) {
        .hero h1 {
            font-size: 3.5rem;
        }
    }
    @media (max-width: 420px) {
        padding: 0;
        h1,
        h2,
        h3,
        p,
        ul,
        ol {
            padding: 0 2rem;
        }
        img {
            width: 120%;
            margin-left: -10%;
        }
        .hero {
            margin-top: 0;
            h1 {
                bottom: 1.5rem;
                left: 0;
            }
        }
    }
    a {
      text-decoration: underline;
   }
`;

const Article = ({ title, heroImg, children }) =>
    <Styles>
        {heroImg
            ? <div className="hero">
                  <img src={heroImg} alt="" />
                  <div className="legibility-gradient" />
                  <h1>
                      {title}
                  </h1>
              </div>
            : <h1>
                  {title}
              </h1>}
        {children}
    </Styles>;

Article.propTypes = {
    title: PropTypes.string.isRequired,
    heroImg: PropTypes.string,
    children: PropTypes.element,
};

export default Article;
