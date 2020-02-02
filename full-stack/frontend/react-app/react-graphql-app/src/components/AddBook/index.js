import React, { Component, Fragment } from 'react'
import { graphql } from 'react-apollo'
import get from 'lodash/get'
import compose from 'lodash/flowRight';

import { addBookMutation, getAuthorsQuery } from '../../queries'

export class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                genre: "",
                authorId: ""
            }
        }
        this.displayAuthors = this.displayAuthors.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()
        const { name, genre, authorId } = this.state.form
        if (name && genre && authorId) {
            this.props.addBookMutation({
                variables: {
                    name,
                    genre,
                    authorId
                }
            })
        }
    }

    onChange(event) {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    displayAuthors() {
        const data = get(this.props, 'getAuthorsQuery', {})

    if (data.loading) return (
            <Fragment>
                <option>
                    Loading Authors....
                </option>
            </Fragment>
        )

        if (!data.loading) return (
            <Fragment>
                {
                    data.authors.map((author, key) => {
                        return (
                            <Fragment key={key}>
                                <option value={author.id}>
                                    {author.name}
                                </option>
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        )
        return ""
    }

    render() {
        const name = get(this.state, 'form.name', '')
        const genre = get(this.state, 'form.genre', '')
        const authorId = get(this.state, 'form.authorId', '')

        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <label htmlFor="">Book Name: </label>
                        <input type="text" name={`name`} onChange={this.onChange} value={name}/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Genre: </label>
                        <input type="text" name={`genre`} onChange={this.onChange} value={genre}/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Author: </label>
                        <select onChange={this.onChange} name={`authorId`} value={authorId} >
                            <option>Select Author</option>
                            { this.displayAuthors() }
                        </select>
                    </div>
                    <input type="submit" value="Add" />
                </form>
            </Fragment>
        )
    }
}



export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)