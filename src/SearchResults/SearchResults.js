import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';

function SearchResults() {
  return (
    <div className={styles.SearchResults}>
      <h2 className={styles.SearchResultsHeader}>Search Results</h2> {/* Apply the new class here */}
      <div className={styles.placeholder}></div> {/* Add this line */}
      <TrackList />
    </div>
  );
}

export default SearchResults;