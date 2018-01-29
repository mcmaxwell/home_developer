import './header.scss'

import React from 'react';
import Top from './top/top'
import Popup from './../popup/popup'
import Registration from './../registration/registration'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  openPopup() {
    this.setState({
      showPopup: true
    });
  }
  closePopup() {
    this.setState({
      showPopup: false
    });
  }

  unclosePopup(e) {
    e.stopPropagation()
  }

  render() {
    return (
      <header className="header">
        <Top />

          <Popup classname={this.state.showPopup ? 'active' : ''} unclosePopup={this.unclosePopup.bind(this)} show={this.state.showPopup} closePopup={this.closePopup.bind(this)}>
            <Registration />
          </Popup>

        <div className="header__content">
          <div className="inner">
            <a href="/" className="logo">
              <img src={require("./../../assets/img/general/logo.png")} />
            </a>
            <div className="header__content-action">
              <a href="#" className="btn btn-blue btn-registration" onClick={this.openPopup.bind(this)}>Registration</a>
              <form className="header__login">
                <input name="username" type="text" placeholder="Username" required />
                <div className="password-contain">
                  <input name="password" type="password" placeholder="Password" required />
                  <a href="#" className="header__login-forgot">Forgot your password?</a>
                </div>
                <button type="submit" name="submit" className="btn btn-orange btn-login">Login</button>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
