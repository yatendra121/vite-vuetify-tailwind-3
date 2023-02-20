import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

import type { AppRouter } from '../../../../../../nx-react-node-next-main/nx-react-node-next-main/apps/api/src/main'

const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3333/trpc'
        })
    ]
})

const test = async () => {
    return Promise.all([client.post.list.query(), client.post.byId.query('1')])
}

setInterval(() => {
    test().then((res) => console.log({ res: res[1]?.title }))
}, 1000)
