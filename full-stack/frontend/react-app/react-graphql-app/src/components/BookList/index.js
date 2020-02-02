import React, { Component, Fragment } from 'react'
import { graphql } from 'react-apollo'

import get from 'lodash/get'
import { getBooksQuery } from '../../queries'

export class BookList extends Component {
    constructor(props) {
        super(props)
        this.displayBooks = this.displayBooks.bind(this)
    }

    displayBooks() {
        const data = get(this.props, 'data', {})
        if (data.loading) return (<Fragment>Loading Books....</Fragment>)
        if (!data.loading) return (
            <Fragment>
                {
                    data.books.map((book, key) => {
                        return (
                            <Fragment key={key}>
                                <li onClick={() => this.props.selected && this.props.selected({ id: book.id })}>
                                    { book.name }
                                </li>
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        )
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList)