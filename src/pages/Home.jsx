import React from 'react';
import Banner from '../components/Banner';
import MainBanner from '../components/MainBanner';
import BookCategories from '../components/BookCategories';
import { Helmet } from 'react-helmet-async';
import Feature from '../components/Feature';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <MainBanner></MainBanner>
            <BookCategories></BookCategories>
            <Banner></Banner>
            <Feature></Feature>
        </div>
    );
};

export default Home;