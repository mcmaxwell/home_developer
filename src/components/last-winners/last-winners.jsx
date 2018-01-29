import './last-winners.scss'

import React from 'react';
import Slider from 'react-slick';

class LastWinners extends React.Component {
  render() {
    const data = [
      {
        url: '#',
        src: require("./../../assets/img/general/last-winner1.png"),
        title: 'GHOTIC',
        price: '185.00$',
        name: 'PlayerName'
      },
      {
        url: '#',
        src: require("./../../assets/img/general/last-winner2.png"),
        title: 'GAME OF THRONES',
        price: '185.00$',
        name: 'PlayerName'
      },
      {
        url: '#',
        src: require("./../../assets/img/general/last-winner3.png"),
        title: 'ROBYN',
        price: '185.00$',
        name: 'PlayerName'
      },
      {
        url: '#',
        src: require("./../../assets/img/general/last-winner1.png"),
        title: 'GHOTIC',
        price: '185.00$',
        name: 'PlayerName'
      },
      {
        url: '#',
        src: require("./../../assets/img/general/last-winner2.png"),
        title: 'GAME OF THRONES',
        price: '185.00$',
        name: 'PlayerName'
      }
    ];

    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
      ]
    };
    return (
      <section className="last-winners">
        <div className="inner">
          <div className="last-winners__carusel">
            <h4>Last winners</h4>
            <Slider {...settings}>
              {
                data.map((val, index) => (
                  <a href={val.url} target="_blank" key={index} className="last-winners__carusel-item">
                    <img src={val.src} width="69" height="40" alt={val.title} />
                    <span className="last-winners__carusel-list-content">
                      <span className="last-winners__carusel-item-title">{val.title}</span>
                      <span className="last-winners__carusel-item-price">{val.price}</span>
                      <span className="last-winners__carusel-item-name">{val.name}</span>
                    </span>
                  </a>
                ))
              }
            </Slider>
          </div>
          <div className="jackpot-info__contain">
            <h4>JACKPOT</h4>
            <ul>
              <li className="jackpot-info__gold">
                <img src={require("./../../assets/img/general/gold.svg")} width="38" />
                <span>7 859 352</span>
              </li>
              <li className="jackpot-info__silver">
                <img src={require("./../../assets/img/general/silver.svg")} width="38" />
                <span>2 148 759</span>
              </li>
              <li className="jackpot-info__bronze">
                <img src={require("./../../assets/img/general/bronze.svg")} width="38" />
                <span>1 589 654</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default LastWinners;
