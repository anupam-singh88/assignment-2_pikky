import { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search flights"
            value={searchTerm}
            onChange={handleSearch}
        />
    );
};

export default SearchFilter;
