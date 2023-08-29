import React from 'react';
import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/featured';
import Listing from '../../components/list/List';

const Home = () => {
    return(
        <div className = 'home'>
            <Navbar/>
            <Featured/>
            <Listing/>
            <Listing/>
            <Listing/>
            <Listing/>
        </div>
    );
};

export default Home;