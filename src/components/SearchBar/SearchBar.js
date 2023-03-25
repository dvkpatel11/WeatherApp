import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { fetchWeatherData } from '../../api/weatherAPI';
import { formatWeatherData } from '../../utils/formatWeatherData';
import './SearchBar.css';

function SearchBar({ setWeatherData, setErrorMessage }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const rawData = await fetchWeatherData(searchText);
    if (rawData) {
      const data = formatWeatherData(rawData);
      setWeatherData(data);
      setErrorMessage('');
    } else {
      setWeatherData(null);
      setErrorMessage('Invalid city name');
    }
    setSearchText('');
  };
  
  return (
    <div className="search-bar-container">
    <form onSubmit={handleSearch} className="search-form">
      <TextField
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        label="Search for a city"
        variant="outlined"
        className="search-input"
        sx={{ border: 'none' }} // add this line to remove the border around the text field
      />
      <IconButton type="submit" color="primary" className="search-button">
        <SearchIcon />
      </IconButton>
    </form>
  </div>
);
}

export default SearchBar;
