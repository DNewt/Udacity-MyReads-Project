import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class SearchBooks extends React.Component {
    state = {
        books: []
    }

    constructor(props) {
        super(props);
        this.searchForBooks = this.searchForBooks.bind(this);
    }

    searchForBooks(event){
        BooksAPI.search(event.target.value).then((books) => {
            this.setState({books: books})
        })
    }

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.searchForBooks}/>
                    </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                this.state.books.map((book) => {
                                    console.log("===================================================")
                                    console.log(book),
                                    <li> 
                                        <Book book={book} refreshShelves={this.props.refreshShelves.bind(this)} url={'url(' + book.imageLinks.thumbnail +')'}/>
                                    </li>
                                })

                            }
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks
