import React from "react";
import App from "next/app";
import { Provider } from 'mobx-react'
import ReviewStore from "../stores/ReviewStore";

const stores = {
    reviewStore: new ReviewStore()
}

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Provider {...stores}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default MyApp;
