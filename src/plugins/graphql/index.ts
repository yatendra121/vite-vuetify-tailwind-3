import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client/core'
import { Portal } from '@/utils/portal'

const currentPortal = Portal.getInstance()

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: currentPortal.getGraphQLUrl()
})
const defaultOptions = {
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
    // Apollo 4 only accepts errorPolicy here once it's declared via module
    // augmentation, which this unused plugin doesn't need.
    defaultOptions: defaultOptions as never
})
export { apolloClient }
