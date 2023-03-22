import React, { useState } from 'react';
import '../styles/SearchForm.css';

function SearchForm(props) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(city);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter city name" value={city} onChange={(event) => setCity(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
