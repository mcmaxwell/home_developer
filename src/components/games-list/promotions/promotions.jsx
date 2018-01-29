import './promotions.scss'

import React from 'react';
import Slider from 'react-slick';

class Promotions extends React.Component {
  render() {
    const data = [
      {
        url: '#',
        src: require("./../../../assets/img/content/promo.png")
      },
      {
        url: '#',
        src: require("./../../../assets/img/content/promo.png")
      }
    ];

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      dots: true,
      variableWidth: true
    };
    return (
      <div className="promotions">
        <h4>Promotion</h4>
        <div className="promotions__list">
          <Slider {...settings}>
            {
              data.map((val, index) => (
                <a href={val.url} key={index} className="promotions__item">
                  <img src={val.src} />
                </a>
              ))
            }
          </Slider>
        </div>
      </div>
    )
  }
}

export default Promotions;
