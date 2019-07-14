import React, { Fragment, Component } from 'react'

import { toJS } from 'mobx';

import { inject, observer } from 'mobx-react'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.PostStore.loadPosts()
    }

    render() {

        return (
            <Fragment>
                <div className="card-container">
                    {
                        toJS(this.props.PostStore.postData).map((post, index) => (
                            <div className="card m-2 d-inline-block" key={index}>
                                <div className="card-body">
                                    <div className="card-text">
                                        { post.name }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default inject('PostStore')(observer(Posts))