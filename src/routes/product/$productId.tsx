import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/$productId')({
  component: RouteComponent,
  loader:async ({params})=>{
    return{
      postId:params.productId
    }
  },
  pendingComponent:()=>(<p>Loading...</p>)
})

function RouteComponent() {
  const {postId} = Route.useLoaderData()
  return <div>Hello {postId}</div>
}
