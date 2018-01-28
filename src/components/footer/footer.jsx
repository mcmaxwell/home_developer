import './footer.scss'

import React from 'react';

const menu = [
  {
    url: '#',
    text: 'About casino'
  },
  {
    url: '#',
    text: 'Terms and conditions'
  },
  {
    url: '#',
    text: 'Responsible gaming'
  },
  {
    url: '#',
    text: 'Contact us'
  }
]

const payments = [
  {
    url: '#',
    img: require("./../../assets/img/general/master-card.png")
  },
  {
    url: '#',
    img: require("./../../assets/img/general/yandex.png")
  },
  {
    url: '#',
    img: require("./../../assets/img/general/visa.png")
  },
  {
    url: '#',
    img: require("./../../assets/img/general/liqpay.png")
  },
  {
    url: '#',
    img: require("./../../assets/img/general/qiwi.png")
  }
]

const Footer = () => (
  <footer className="footer">
    <ul className="footer__menu menu">
      {
        menu.map((val, index) => (
          <li key={index}><a href={val.url}>{val.text}</a></li>
        ))
      }
    </ul>
    <div className="payments-logo">
      {
        payments.map((val, index) => (
          <a key={index} href={val.url}><img src={val.img} /></a>
        ))
      }
    </div>
    <div className="copyright">© 2015 . All rights reserved.</div>
  </footer>
)

export default Footer;
