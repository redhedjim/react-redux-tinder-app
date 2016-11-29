import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">{book.title}
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}       
      </ul>
    );
  }
}

function mapStateToProps(state){
  //This gets set to props inside BookList
  return {
    books: state.books
  };
}
// Anything returned form this function will show up as props on BookList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote bookList from component to container -  it needs to know about
// new dispatch method, selectBook. Make it available as a prop

export default connect(mapStateToProps, mapDispatchToProps)(BookList);


