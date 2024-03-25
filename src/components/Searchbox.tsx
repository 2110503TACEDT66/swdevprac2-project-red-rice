'use client';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Sample data for restaurants
const restaurantsData = [
    { id: 1, name: 'Restaurant A' },
    { id: 2, name: 'Restaurant B' },
    { id: 3, name: 'Restaurant C' },
    // Add more restaurant objects as needed
];

const Searchbox = () => {
    // State variables
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] =
        useState(restaurantsData);

    // Function to handle search query changes
    const handleSearchQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const query = event.target.value;
        setSearchQuery(query);
        // Filter restaurants based on search query
        const filtered = restaurantsData.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    return (
        <div className="flex flex-row items-center border border-gray-300 rounded-lg px-4 py-3 bg-slate-50 text-slate-500">
            {/* Search box */}
            <FaSearch />
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="outline-none border-none ml-3 bg-slate-50"
            />
        </div>
    );
};

export default Searchbox;
