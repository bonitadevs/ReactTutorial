import React from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components

// Hook

// Image
import NoImage from '../images/no_image.jpg';
import { useState } from 'react';

const Home = () => {
    //state to hold the movies
    const [state, setState] = useState();
    //state loading 
    const [loading, setLoading] = useState(false);
    //error state if receive error from API
    const [error, setError] = useState(false);

    return <div>Home Page</div>
}

export default Home;