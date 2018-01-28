import './games-list.scss'

import React from 'react';
import Filter from './filter/filter'
import Promotions from './promotions/promotions'
import data from './data'

const GamesList = () => (
  <section>
    <Filter />
    <div className="games-list">
      {
        data.map((val, index) => (
          <div className="games-list__item" key={index}>
            <div className="games-list__item-img" style={{ backgroundImage: `url(${val.img})` }}>
              <a href={val.playLink} className="btn btn-blue">Play now</a>
              <a href={val.demoLink} className="btn btn-orange">Demo</a>
            </div>
            <h4>{val.title}</h4>
          </div>
        ))
      }
    </div>
    <a href="#" className="btn btn-blue">More Games</a>
    <Promotions />
  </section>
)

export default GamesList;
