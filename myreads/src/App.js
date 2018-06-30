import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Shelf from './Shelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllTheBooks()
  }

  getAllTheBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      }, () => console.log(books))
      
    })
    
  }

  refreshShelves(book, shelf){
    BooksAPI.update(book, shelf).then(
      this.getAllTheBooks()
    )
  }



  render() {
    return (
      <div className="app">
       <Route path="/search" render={( { history }) => (  
          <SearchBooks refreshShelves={this.refreshShelves.bind(this)} />
        )} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <Shelf shelfType="currentlyReading" divName="CurrentlyReading" shelfname="Currently Reading" books={this.state.books} refreshShelves={this.refreshShelves.bind(this)} />
                </div>
                <div className="bookshelf">
                  <Shelf shelfType="wantToRead" divName="WantToRead" shelfname="Want To Read" books={this.state.books} refreshShelves={this.refreshShelves.bind(this)}/>
                </div>
                <div className="bookshelf">
                  <Shelf shelfType="read" divName="Read" shelfname="Read" books={this.state.books} refreshShelves={this.refreshShelves.bind(this)}/>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
