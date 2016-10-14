import React, {Component} from 'react';
import './App.css';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-bar">
        <i className="search-icon fa fa-search" />

        <input
            className="search-input"
            type="text"
            placeholder="Look for a hero"
            onChange={this.props.onSearch}
        />
    </div>
    );
  }
}

export default SearchBar;
