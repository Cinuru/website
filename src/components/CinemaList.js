import React from "react";
import PropTypes from "proptypes";
import styled from "styled-components";

import graphqlFetch from "../graphql-fetch";

const Wrapper = styled.div`
  margin-top: 4rem;
  border-top: 0.15rem solid white;
  width: 120%;
  p {
    font-size: 1.25rem;
  }
`;

export default class CinemaList extends React.Component {
  static propTypes = { title: PropTypes.string };

  constructor(props) {
    super(props);
    this.state = { cinemas: [] };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      graphqlFetch({
        operationName: "AllCinemaNames",
        query: /* GraphQL */ `
        query AllCinemaNames {
            cinemas {
                id
                name
                city
                claim
            }
        }`
      }).then(({ data }) => {
        this.setState({ cinemas: data.cinemas });
      });
    }
  }

  render() {
    const { cinemas } = this.state;
    const { title } = this.props;
    return (
      <Wrapper>
        <p>{title}</p>
        {cinemas.length > 0 ? (
          cinemas.map(({ id, name, city, claim }) => (
            <p key={id}>{`${name}${claim ? " " + claim : ""}, ${city}`}</p>
          ))
        ) : (
          <p>...</p>
        )}
      </Wrapper>
    );
  }
}
