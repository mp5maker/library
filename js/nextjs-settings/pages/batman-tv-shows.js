import React, { Fragment } from "react"

import Link from "next/link"

import fetch from "isomorphic-unfetch"

import Layout from "../components/Layout"

import { withRouter } from "next/router"

import batmanTvShowsStyle from "../styles/jsx/batman-tv-shows"

const Batman = withRouter((props) => (
    <Fragment>
        <Layout>
            <div>
                <h4>
                    Batman
                </h4>
            </div>
            {
                props.router.query.id
                    ?
                    <div>
                        <h1>
                            { props.show.name }
                        </h1>
                        <p>
                            { props.show.summary.replace(/<[/]?p>/g, ' ') }
                        </p>
                        <img src = {props.show.image.medium} />
                    </div>
                    :
                    <ul>
                        {
                            props.shows.map((show) => (
                                <li key={show.id}>
                                    <Link
                                        as={`/batman-tv-shows/${show.id}`}
                                        href={`/batman-tv-shows?id=${show.id}`}>
                                        <a title={show.name}>
                                            {show.name}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }
                <style jsx>
                    { batmanTvShowsStyle }
                </style>
        </Layout>
    </Fragment>
))

/* Once the data is loaded in client side, the data will be seen in server console.log not in google chrome */
/* If we go to the details page directly the data shows in server console */
/* If we use link tag to navigate it uses server side console */
Batman.getInitialProps = async function(context) {
    const { id } = context.query;
    if (id) {
        const response = await fetch(`http://api.tvmaze.com/shows/${id}`);
        const show = await response.json()
        console.log(show)
        return { show }
    }
    if (!id) {
        const response = await fetch("http://api.tvmaze.com/search/shows?q=batman");
        const data = await response.json()
        return { shows: data.map((entry) => entry.show) }
    }
}

export default Batman