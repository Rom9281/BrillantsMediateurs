import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Redirect to the URL with the query parameter
        navigate(`?id=${searchValue}`);
    };

    return (
        <div className='search-container'>
            <input className='search-bar'
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button 
                onClick={handleSearch}
                className='search-button'
            >Search</button>
        </div>
    );
};

export default SearchBar;