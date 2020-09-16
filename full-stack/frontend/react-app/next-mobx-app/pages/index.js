import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("postStore")
@observer
class Post extends Component {
    static async getInitialProps({ mobxStore, query }) {
        await mobxStore.postStore.fetch(query.id);
        return { post: mobxStore.postStore.post };
    }

    render() {
        const { post } = this.props

        return (
            <div>
                <h1>{post.title}</h1>
            </div>
        );
    }
}

export default Post;
