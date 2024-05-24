import { createApp, h } from "vue";
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";

import App from "./App.vue";

const httpLink = createHttpLink({
    uri: "http://localhost/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

createApp({
    render: () => h(App),
})
    .use(apolloClient)
    .mount("#app");
