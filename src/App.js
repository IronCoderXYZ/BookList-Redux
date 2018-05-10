import React, { Component } from 'react';
import BookList from '../src/containers/bookList';
import BookDetail from '../src/containers/bookDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
