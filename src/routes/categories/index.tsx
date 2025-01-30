import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/')({
  component: RouteComponent,
  loader: async () => {
    const req = await fetch('https://dummyjson.com/products/category-list')
    const allCategories = await req.json()
    return { allCategories }
  },
})

function RouteComponent() {
  const { allCategories }: { allCategories: string[] } = Route.useLoaderData()
  return (
    <div className="grid grid-cols-2 gap-2 p-3 min-h-screen">
      {allCategories?.map((item, i) => (
        <Link to='/categories/$category' params={{category:item}} key={i} className="w-full p-5 rounded-md dark:bg-dark-grey-50">
          {item}
        </Link>
      ))}
    </div>
  )
}
