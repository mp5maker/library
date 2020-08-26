import { NavBar } from "../components/Navbar"
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from "../utils/createUrqlClient"
import { usePostsQuery } from "../generated/graphql"

const Index = () => {
  const [{ data }] = usePostsQuery();

  return (
    <>
      <NavBar />
      {
        !data ? (
          <div>
            Loading...
          </div>
        ) : data.posts.map((item) => {
          return (
            <div key={item.id}>
              { item.title }
            </div>
          )
        })
      }
    </>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Index)
