import React from 'react';
import './App.css';

const SearchBar = props => (
  <div className="search-bar">
    <i className="search-icon fa fa-search" />

    <input
      className="search-input"
      type="text"
      placeholder="Look for a hero"
      onChange={props.onSearch} />
  </div>
);

SearchBar.propTypes = {
  onSearch: React.PropTypes.func,
};

export default SearchBar;
