import React, { Component } from 'react';

class Book extends Component {
    handleChange(event) {
        this.props.refreshShelves(this.props.book, event.target.value)
    }

    state = {}

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    

    render() {
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.url }}></div>
                <div className="book-shelf-changer">
                    <select onChange={this.handleChange} value={this.props.book.shelf}>         
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.author}</div>
            </div>     
        );
    }
}

export default Book;
