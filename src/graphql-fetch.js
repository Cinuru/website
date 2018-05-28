import { createApolloFetch } from "apollo-fetch";

const uri = "https://api.cinuru.com";
const graphqlFetch = createApolloFetch({ uri });

export default graphqlFetch;
