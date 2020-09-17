import React, { Component } from "react";
import Reviews from "../components/reviews";
import Dashboard from "../components/dashboard";
import Form from "../components/form";
import { inject } from "mobx-react";

@inject('reviewStore')
class Home extends Component {
    render() {
        const { reviewStore } = this.props

        return (
            <div className="container">
                <Form store={reviewStore} />
                <Dashboard store={reviewStore} />
                <Reviews store={reviewStore} />
            </div>
        );
    }
}

export default Home;
