import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    DefaultOptions
} from '@apollo/client/core'
import { Portal } from '@/utils/portal'

const currentPortal = new Portal()

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: currentPortal.getGraphQLUrl()
})
const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
}

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    defaultOptions: defaultOptions
})
export { apolloClient }
