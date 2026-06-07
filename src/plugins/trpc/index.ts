import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

const client = createTRPCProxyClient<any>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3333/trpc'
        })
    ]
})

export { client }
