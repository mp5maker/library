import React, { Fragment, Component } from 'react'
import { graphql } from 'react-apollo'
import get from 'lodash/get'
import { getBookQuery } from '../../queries'


export class BookDetails extends Component {
    constructor(props) {
        super(props)
        this.getBookDetails = this.getBookDetails.bind(this)
    }

    getBookDetails() {
        const book = get(this.props, 'data.book', {})
        if (book) {
            console.log(book)
            return (
                <Fragment>
                    <div className="book">
                        <div>
                            Book: { book.name }
                        </div>
                        <div>
                            Genre: { book.genre }
                        </div>
                    </div>
                    <div className="author">
                        <div>
                            <small> {get(book, 'author.name', '') } </small>
                        </div>
                    </div>
                    <div className="other-books">
                        <ul>
                            {
                                get(book, 'author.books', []).map((item, key) => {
                                    return (
                                        <Fragment key={key}>
                                            <li>
                                                { item.name }
                                            </li>
                                        </Fragment>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Fragment>
            )
        }
    }

    render() {
        return (
            <Fragment>
                <div id="book-details">
                    { this.getBookDetails() }
                </div>
            </Fragment>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        if (props.selected) {
            return {
                variables: {
                    id: props.selected
                }
            }
        }
        return {}
    }
})(BookDetails)