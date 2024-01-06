import React, { useState } from 'react';
import styles from './SearchBar.module.css'; // Import the CSS module

function SearchBar(props) { // Add props parameter
  const [term, setTerm] = useState(''); // Add state for the search term

  const handleTermChange = event => { // Add a method to handle input changes
    setTerm(event.target.value);
  };

  const search = event => { // Add a method to handle button click
    props.onSearch(term);
    event.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <div className={styles.SearchBar}> {/* Use the styles in your JSX code */}
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className={styles.SearchButton} onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;