import { connect } from 'react-redux';
import React, { Component } from 'react';

class BookDetail extends Component {
  render() {
    return <div>Book Detail</div>;
  }
}

function mapStateToProps(state) {
  return { book: state.activeBook };
}

export default connect(mapStateToProps)(BookDetail);
