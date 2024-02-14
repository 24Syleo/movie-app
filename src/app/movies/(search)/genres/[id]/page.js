import SearchResult from '@/components/SearchResult.js/SearchResult';
import React from 'react';

const GenreIdPage = ({ params, searchParams }) => {
    return (
        <SearchResult searchParams={searchParams} genreId={params.id} />
    );
};

export default GenreIdPage;