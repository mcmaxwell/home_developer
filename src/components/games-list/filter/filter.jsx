import './filter.scss'

import React from 'react';

const Filter = () => (
  <div className="inner">
    <div className="menu-games">
      <a href="#">
        <img src={require("./../../../assets/img/general/diamond.png")}  />
        <span>Popular</span>
      </a>
      <a href="#">
        <img src={require("./../../../assets/img/general/new.png")}  />
        <span>New</span>
      </a>
      <a href="#">
        <img src={require("./../../../assets/img/general/slot.png")}  />
        <span>Slot games</span>
      </a>
      <a href="#">
        <img src={require("./../../../assets/img/general/cards.png")}  />
        <span>Card games</span>
      </a>
      <a href="#">
        <img src={require("./../../../assets/img/general/roulette.png")}  />
        <span>Roulette</span>
      </a>
    </div>
    <div className="filter-games">
      <div className="filter-games__sort">
        <span>Sort by: </span>
        <a href="#">Popularity</a>
        <span className="separate">|</span>
        <a href="#">A-Z</a>
      </div>
      <div className="filter-games__search">
        <input name="search" type="text" placeholder="Search for game ..." />
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
)

export default Filter;
