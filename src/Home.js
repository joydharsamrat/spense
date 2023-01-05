import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Photos from './components/Photos';
import Rules from './components/Rules';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className='max-w-[950px] mx-auto'>
                <div className='px-5'>
                    <Photos></Photos>
                    <About></About>
                </div>
                <hr />
                <div className='px-5'>
                    <Rules></Rules>
                </div>
            </div>
        </div>
    );
};

export default Home;