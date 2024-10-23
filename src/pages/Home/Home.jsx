import React from 'react';
import Banner from './Banner';
import PopularCategory from './PopularCategory';
import SpecialDishes from './SpecialDishes';
import Testimonials from './Testimonials';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularCategory />
            <SpecialDishes />
            <Testimonials />
            <Services />
        </div>
    );
};

export default Home;