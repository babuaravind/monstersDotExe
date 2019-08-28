import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    name=''
    id=''
    placeholder={placeholder}
    onChange={handleChange}
  />
);
