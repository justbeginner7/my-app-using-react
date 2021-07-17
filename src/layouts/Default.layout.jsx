import React from "react";
import Navbar from "../components/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
//import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            {props.children}
        </>
    );
};

export default DefaultLayout;