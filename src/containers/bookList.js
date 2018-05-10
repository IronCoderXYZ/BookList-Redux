// NPM Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// Local Imports
import { selectBook } from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title} className="list-group-item">
        {book.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
