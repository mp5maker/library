import React from "react"

import { Header } from '../Components/Header'
import { Layout } from '../Components/Layout'

export default function About() {
    return (
        <>
            <Header title={`About Me`} />
            <Layout>
                <div style={{ color: `purple` }}>
                    <p>
                        Error 404
                    </p>
                </div>
            </Layout>
        </>
    )
}
