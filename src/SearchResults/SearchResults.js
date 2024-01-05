import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';

function SearchResults() {
  return (
    <div className={styles.SearchResults}>
      <h2 className={styles.SearchResultsHeader}>Results</h2> {/* Apply the new class here */}
      <TrackList />
    </div>
  );
}

export default SearchResults;