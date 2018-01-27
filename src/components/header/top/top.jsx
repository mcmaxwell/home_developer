import './top.scss'

import React from 'react';

const menuData = [
  {
    text: 'Все игры',
    url: '#'
  },
  {
    text: 'Пополнения счета',
    url: '#'
  },
  {
    text: 'Получить выигрыш',
    url: '#'
  },
  {
    text: 'Бонусы',
    url: '#'
  },
  {
    text: 'Мобильная версия',
    url: '#'
  },
  {
    text: 'Контакты',
    url: '#'
  },
]

const socialList = [
  {
    icon: 'facebook',
    url: '#'
  },
  {
    icon: 'twitter',
    url: '#'
  },
  {
    icon: 'vk',
    url: '#'
  }
]

const langList = [
  {
    url: '#',
    text: 'Русский',
    imgSrc: require('./../../../assets/img/general/flag/ru.png'),
    imgSrcset: require('./../../../assets/img/general/flag/ru@2x.png') + ' 2x, ' + require('./../../../assets/img/general/flag/ru@3x.png') + ' 3x'
  },
  {
    url: '#',
    text: 'Русский',
    imgSrc: require('./../../../assets/img/general/flag/ru.png'),
    imgSrcset: require('./../../../assets/img/general/flag/ru@2x.png') + ' 2x, ' + require('./../../../assets/img/general/flag/ru@3x.png') + ' 3x'
  }
]

const Top = () => {
  const choiceLang = (e) => {
    document.querySelector('.lang ul').className = document.querySelector('.lang ul').className === 'active' ? '' : 'active'
  }
return(
  <div className="header__top">
    <div className="inner">
      <nav>
        <ul className="menu">
          {
            menuData.map((val, index) => (
              <li key={index}><a href={val.url}>{val.text}</a></li>
            ))
          }
        </ul>
      </nav>
      <a href="#" className="fast-registration"><i className="fa fa-bolt" aria-hidden="true"></i>Быстрая регистрация</a>
      <ul className="social">
        {
          socialList.map((val, index) => (
            <li key={index}><a href={val.url} target="_blank"><i className={"fa fa-" + val.icon} aria-hidden="true"></i></a></li>
          ))
        }
      </ul>
      <div className="lang">
        <span className="current" onClick={choiceLang}>
          <img src={require('./../../../assets/img/general/flag/us.png')} srcSet={require('./../../../assets/img/general/flag/us@2x.png') + ' 2x, ' + require('./../../../assets/img/general/flag/us@3x.png') + ' 3x'} />
          <span>English</span>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </span>
        <ul>
          {
            langList.map((val, index) => (
              <li key={index}>
                <a href={val.url}>
                  <img src={val.imgSrc} srcSet={val.imgSrcset} />
                  <span>{val.text}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
)}

export default Top;
