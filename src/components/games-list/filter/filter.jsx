import './filter.scss'

import React from 'react';

const Filter = () => (
  <div className="inner">
    <div className="menu-games">
      <a href="#">
        <img src="" />
        <span>Popular</span>
      </a>
      <a href="#">
        <img src="" />
        <span>New</span>
      </a>
      <a href="#">
        <img src="" />
        <span>Slot games</span>
      </a>
      <a href="#">
        <img src="" />
        <span>Card games</span>
      </a>
      <a href="#">
        <img src="" />
        <span>Roulette</span>
      </a>
    </div>
    <div className="filter-games">
      <div className="filter-games__sort">
        <span>Sort by:</span>
        <a href="#">Popularity</a>
        <span>|</span>
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
