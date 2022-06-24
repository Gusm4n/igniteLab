import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4stopop2kr301ywbreq7voa/master',
    cache: new InMemoryCache()
})