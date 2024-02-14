import { notFound } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Page demandée non trouvé.</p>
        </div>
    );
};

export default NotFound