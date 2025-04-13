import React from 'react';

const link = ({route}) => {
    return (
        <li className='mr-10 bg-amber-200 rounded-lg px-2 py-1'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default link;