import React from 'react';
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';

const Home = () => {
    return (
        <div className='home'>
            <Jumbotron/>
            <About/>
        </div>
    );
};
export default Home;