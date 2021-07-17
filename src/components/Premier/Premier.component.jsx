import React from 'react';
import Slider from "react-slick";

// components
import Poster from "../Poster/poster.component";

const Premier = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
          {
            breakpoints: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoints: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              InitialSlide: 1,
            },
          },
          {
            breakpoints: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00303783-lmvxvxzvrd-portrait.jpg",
            alt: "movie1",
            title: "The Tunnel",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-courier-2021-et00137324-19-06-2021-11-33-11.jpg",
            alt: "movie2",
            title: "The Courier",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-hpbbnylznm-portrait.jpg",
            alt: "movie3",
            title: "Resistance",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-evsmpzefqs-portrait.jpg",
            alt: "movie4",
            title: "The Secrets We Keep",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
            alt: "movie5",
            title: "Proximity",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-suwzpmsprd-portrait.jpg",
            alt: "movie6",
            title: "Radioactive",
            subtitle: "English",
        },
    ];

    return (
        <>
          <Slider {...settings}>
              {PremierImages.map((image) => {
                  <Poster {...image}/>
              })}
          </Slider>
        </>
    );
};

export default Premier;
