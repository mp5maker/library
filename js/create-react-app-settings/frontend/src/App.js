import React, { Component, Fragment } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

import "./App.scss"

import axios from "./Axios"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    const onSuccessBlog = (response) => {
      this.setState({
        blogs: response.data
      })
    }

    const onErrorBlog = (response) => console.log(response.error)

    axios.get("/blog/").then(onSuccessBlog).catch(onErrorBlog)
  }

  render() {
    const { blogs } = this.state
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand text-white">
            Testing
          </a>
        </nav>
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col">
                  <div className="common-header">
                      <h4>
                          Blog List
                      </h4>
                  </div>
                  <div className="content">
                    {
                      blogs.map((blog, index) => (
                        <div className="card m-3 d-inline-block" key={index}>
                          <div className="card-body">
                            <div className="card-title">
                                { blog.title }
                            </div>
                            <div className="card-text">
                                { blog.description }
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
            </div>
          </div>
        </div>
        <footer>
          <div>
            &copy; { new Date().getFullYear() } All Rights Reserved, Photon Enterprise
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default App
