import React from 'react';
import styles from './SearchBar.module.css'; // Import the CSS module

function SearchBar() {
  return (
    <div className={styles.SearchBar}> {/* Use the styles in your JSX code */}
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className={styles.SearchButton}>SEARCH</button>
    </div>
  );
}

export default SearchBar;