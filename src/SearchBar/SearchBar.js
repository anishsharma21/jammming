import React, { useState } from 'react';
import styles from './SearchBar.module.css'; // Import the CSS module

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleTermChange = event => {
    setTerm(event.target.value);
  };

  const search = event => {
    props.onSearch(term);
    event.preventDefault();
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      search(event);
    }
  };

  return (
    <div className={styles.SearchBar}>
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} onKeyPress={handleKeyPress} />
      <button className={styles.SearchButton} onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;