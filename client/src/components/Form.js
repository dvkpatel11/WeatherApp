import React from 'react';

function Form({ city, setCity, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a city name" value={city} onChange={(event) => setCity(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
