import React from 'react';
import Header from './header/header'
import TopCarusel from './top-carusel/top-carusel'
import LastWinners from './last-winners/last-winners'
import GamesList from './games-list/games-list'
import Footer from './footer/footer'
import Popup from './popup/popup'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TopCarusel />
        <LastWinners />
        <GamesList />
        <Footer />
      </div>
    );
  }
}
