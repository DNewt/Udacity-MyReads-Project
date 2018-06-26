import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class CurrentlyReading extends Component {

    componentDidMount() {
        
        BooksAPI.getAll().then((book) => book.filter((book) => {
            return book.shelf === "currentlyReading";
        })).then(book => this.setState({
            books: book
        }))

    }
    
    state = {
        books: []
    }

  render() {
    return (
      <div className="CurrentlyReading">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        {this.state.books.map((book) => 
            <li> 
                <Book refreshShelves={this.props.refreshShelves} shelf={book.shelf} id={book.id} title={book.title} author={book.authors[0]} url={'url(' + book.imageLinks.thumbnail +')'}/>
            </li>
        )}    
        </ol>
        </div>
      </div>
    );
  }
}

export default CurrentlyReading;
