import React from 'react';
import Header from './header/header'
import TopCarusel from './top-carusel/top-carusel'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TopCarusel />
      </div>
    );
  }
}
