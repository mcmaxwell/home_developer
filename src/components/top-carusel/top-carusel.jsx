import './top-carusel.scss'

import React from 'react';
import Slider from 'react-slick';

class TopCarusel extends React.Component {
  render() {
    const data = [
      {
        url: '#',
        src: require("./../../assets/img/general/slider.png")
      },
      {
        url: '#',
        src: require("./../../assets/img/general/slider.png")
      }
    ];

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    };
    return (
      <section className="top-carusel">
        <Slider {...settings} classNme="sss">
          {
            data.map((val, index) => (
              <a href={val.url} target="_blank" key={index}>
                <img src={val.src} />
              </a>
            ))
          }
        </Slider>
      </section>
    );
  }
}

export default TopCarusel;
