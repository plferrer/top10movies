import React from 'react';

const TopMoviesHeader = (props) => {

  const handleChange = (event) => {
    const year = event.target.value;
    props.onSelect(year);
  }

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, index) => end - index)
  }

  const yearSelect = (
    <select value={props.year} onChange={handleChange} className='select-css'>
      {range(1930,2020).map((number) =>
        <option value={number.toString()}>{number}</option>
      )}
    </select>
  )

  return (
    <div className='header'>
      <h1>Top 10 Movies of {yearSelect} </h1>
    </div>
  );
};

export default TopMoviesHeader;