import React from "react"

import { Header } from '../Components/Header'
import { Layout } from '../Components/Layout'
import { UserList } from '../Components/UserList'

export default function Home() {
  return (
    <>
      <Header title={`Welcome`}/>
      <Layout>
        <div style={{ color: `purple`}}>
            <p>
              What a World.
            </p>
            <img
              crossOrigin={`anonymous`}
              src="https://source.unsplash.com/random/400x200"
              alt="" />
        </div>
        <UserList />
      </Layout>
    </>
  )
}
