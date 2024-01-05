import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';

function SearchResults({ searchResults }) {
  return (
    <div className={styles.SearchResults}>
      <h2 className={styles.SearchResultsHeader}>Search Results</h2> {/* Apply the new class here */}
      <TrackList tracks={searchResults} />
    </div>
  );
}

export default SearchResults;