import React from 'react';
import SearchResult from '@/components/SearchResult.js/SearchResult';

const MoviesPage = ({ searchParams }) => {
    return (
        <SearchResult searchParams={searchParams} />
    ) 
}

export default MoviesPage;
