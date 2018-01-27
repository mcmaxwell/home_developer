import './header.scss'

import React from 'react';
import Top from './top/top'

const Header = () => (
  <header className="header">
    <Top />

    <div className="header__content">
      <div className="inner">
        <a href="/" className="logo">
          <img src={require("./../../assets/img/general/logo.png")} />
        </a>
        <div className="header__content-action">
          <a href="#" className="btn btn-blue btn-registration">Registration</a>
          <form className="header__login">
            <input name="username" type="text" placeholder="Username" />
            <div className="password-contain">
              <input name="password" type="password" placeholder="Password" />
              <a href="#" className="header__login-forgot">Forgot your password?</a>
            </div>
            <button type="submit" name="submit" className="btn btn-orange btn-login">Login</button>

          </form>
        </div>
      </div>
    </div>
  </header>
)

export default Header;
