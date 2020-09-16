import React from "react";
import App from "next/app";
import { Provider } from "mobx-react";

import initializeStore from "../store/stores";

class CustomApp extends App {
    static async getInitialProps(appContext) {
        const mobxStore = initializeStore();
        appContext.ctx.mobxStore = mobxStore;
        const appProps = await App.getInitialProps(appContext);
        const returnedProps = {
            ...appProps,
            initialMobxState: mobxStore,
        };
        console.log("CustomApp -> getInitialProps -> returnedProps", returnedProps)
        return returnedProps
    }

    constructor(props) {
        super(props);
        const isServer = typeof window === "undefined";
        this.mobxStore = isServer
            ? props.initialMobxState
            : initializeStore(props.initialMobxState);
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider {...this.mobxStore}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default CustomApp;
