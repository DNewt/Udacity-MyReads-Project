import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  
  render() {
    return (
      <div className={this.props.divName}>
        <h2 className="bookshelf-title">{this.props.shelfname}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        {this.props.books.filter((b) => b.shelf === this.props.shelfType).map((book) => 
        {
            return <li> <Book book={book} refreshShelves={this.props.refreshShelves.bind(this)} url={'url(' + book.imageLinks.thumbnail +')'}/> </li>
        }
        )}    
        </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
