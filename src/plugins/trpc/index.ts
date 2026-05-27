import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const client = createTRPCProxyClient<any>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3333/trpc'
        })
    ]
})

export { client }
