import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
    return (
        <>
          <div className="container mx-auto px-20">
              <h1 className="text-xl font-bold text-gray-800 my-3">
                  The Best of Entertainment
              </h1>
              <EntertainmentCardSlider />
              <Premier />
          </div>
        </>
    );
};

export default HomePage;