import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
    return (
        <>
            <HeroSection title="Thapa Store" />
            <Services />
            <Trusted />
        </>
    );
};

export default Home;
