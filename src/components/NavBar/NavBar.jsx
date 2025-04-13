import React from 'react';
import Link from './link';

const navigationData =
    [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "name": "About Us",
            "path": "/about-us"
        },
        {
            "id": 3,
            "name": "Services",
            "path": "/services"
        },
        {
            "id": 4,
            "name": "Contact",
            "path": "/contact"
        },
        {
            "id": 5,
            "name": "Blog",
            "path": "/blog"
        }
    ]

const NavBar = () => {
    return (
        <nav>

            <ul className='flex'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            {/* <ul className='flex'>
                {
                    navigationData.map(route =>  <li className='mr-10'>
                        
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
        </nav>

        // give me 5 url information, they will have name, path(url path) and id. i want to use it as navigation data in array of objects
    );
};

export default NavBar;