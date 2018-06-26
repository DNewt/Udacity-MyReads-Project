import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Read extends Component {

    componentDidMount() {
        
        BooksAPI.getAll().then((book) => book.filter((book) => {
            return book.shelf === "read";
        })).then(book => this.setState({
            books: book
        }))

    }
    
    state = {
        books: []
    }

  render() {
    return (
      <div className="Read">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        {this.state.books.map((book) => 
                <li> 
                    <Book refreshShelves={this.props.refreshShelves} title={book.title} author={book.authors[0]} url={'url(' + book.imageLinks.thumbnail +')'}/>
                </li>
        )}  
        </ol>
        </div>
      </div>
    );
  }
}

export default Read;
