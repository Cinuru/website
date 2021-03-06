import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";
import Helmet from "react-helmet";
import Intercom from "react-intercom";

import CinemaList from "../components/CinemaList";
import Container from "./Container";
import { Link } from "phenomic";
import MobileDetect from "mobile-detect";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
  padding: 2rem;

  text-align: center;
  color: white;

  .logo {
    height: 9rem;
  }
  .tagline {
    margin-top: -1rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
  }
  .mascot {
    width: 12rem;
    margin: 2rem 0;
  }
  .title {
    font-size: 2rem;
    font-weight: 700;
  }
  .store-links {
    margin-top: -1rem;
    display: flex;
  }
  .button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.15);
    margin: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    min-width: 11rem;
    &.large {
      height: 4rem;
    }
    transition: all 0.15s;
    &:hover,
    &:active,
    &:focus {
      background: rgba(255, 255, 255, 0.25);
      transform: scale(1.1);
    }
    img {
      width: 2.5rem;
      height: auto;
      margin-right: 0.5rem;
    }
  }
  .feedback {
    margin-top: 4rem;
    p {
      margin: 0;
    }
  }
  .cinemas {
    margin-top: 4rem;
    border-top: 0.15rem solid white;
    width: 120%;
    p {
      font-size: 1.25rem;
    }
  }
`;

const HomePage = ({
  head: {
    redirectToStore,
    description,
    tagline,
    mascotImg,
    callToAction,
    playStoreLink,
    appStoreLink,
    feedbackCTA,
    feedbackMail,
    feedback,
    cinemaHeader,
    ...head
  },
  ...props
}) => {
  if (typeof window !== "undefined" && redirectToStore) {
    const os = new MobileDetect(window.navigator.userAgent).os();
    if (os === "AndroidOS") {
      window.location.replace(playStoreLink);
    } else if (os === "iOS") {
      window.location.replace(appStoreLink);
    }
  }
  return (
    <Container {...{ head, ...props }}>
      <Helmet>
        <meta name="apple-itunes-app" content="app-id=1281946162" />
      </Helmet>
      <Wrapper>
        <img className="logo" src="/assets/logoVertical.svg" alt="Cinuru" />
        <p className="tagline">{tagline}</p>
        <div>
          {description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <img className="mascot" src={mascotImg} alt="" />
        <p className="title">{callToAction}</p>
        <div className="store-links">
          <Link to={appStoreLink} className="button large">
            <img src="/assets/apple.svg" alt="" />
            <span>iOS</span>
          </Link>
          <a href={playStoreLink} className="button large">
            <img src="/assets/android.svg" alt="" />
            <span>Android</span>
          </a>
        </div>
        <div className="feedback">
          <p>
            <strong>{feedback[0]}</strong>
          </p>
          {feedback.splice(1).map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <span
            className="button"
            onClick={() => {
              window.location.href = `mailto:${feedbackMail}`;
            }}
          >
            {feedbackCTA}
          </span>
        </div>
        <CinemaList title={cinemaHeader} />
      </Wrapper>
      <Intercom appID="fl8b540h" />
    </Container>
  );
};

HomePage.propTypes = {
  head: PropTypes.shape({
    description: PropTypes.arrayOf(PropTypes.string),
    tagline: PropTypes.string,
    mascotImg: PropTypes.string,
    callToAction: PropTypes.string,
    playStoreLink: PropTypes.string,
    feedbackCTA: PropTypes.string,
    feedbackMail: PropTypes.string,
    feedback: PropTypes.arrayOf(PropTypes.string),
    cinemaHeader: PropTypes.string,
    redirectToStore: PropTypes.bool
  })
};

export default HomePage;
