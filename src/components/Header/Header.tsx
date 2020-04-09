import React from 'react';
import './styles/header.scss';
import buttonImg from './img/button.png';
import logo from './img/logo.png';
import compare from './img/compare.svg';
import favorites from './img/favorites.svg';
import basket from './img/basket.svg';
import phone from './img/phone.png';

export const Header = () => {

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__topnav topnav ">
          <ul className="topnav__list">
            <li className="topnav__item">
              <a className="topnav__link" href="/">Главная</a>
            </li>
            <li className="topnav__item">
              <a className="topnav__link" href="/">О компании</a>
            </li>
            <li className="topnav__item">
              <a className="topnav__link" href="/">Ссылка 1</a>
            </li>
            <li className="topnav__item">
              <a className="topnav__link" href="/">Ссылка 2</a>
            </li>
            <li className="topnav__item">
              <a className="topnav__link" href="/">Ссылка 3</a>
            </li>
          </ul>
          <div className="topnav__button button-top">
            <img className="button-top__img" src={buttonImg} alt="man" />
            <a className="button-top__link topnav__link" href="/">Вход</a>
          </div>
        </div>
      </nav>
      <section className="information">
        <div className="information__logo">
          <img src={logo} alt="test" />
        </div>
        <div className="information__connects">
          <div className="information__phones">
            <p className="information__phone">+380 98 170 00 740</p>
            <p className="information__phone">+380 98 170 00 740</p>
            <button type="button" className="information__button button-phone">
              <img className="button-phone__img" src={phone} alt="phone" />
              <span className="button-phone__text">Перезвонить мне</span>
            </button>
          </div>
          <div className="information__links links-head">
            <a className="links-head__link" href="/">
              <img className="links-head__img" src={compare} alt="compare" />
              <p>Сравнение</p>
            </a>
            <a className="links-head__link" href="/">
              <img className="links-head__img" src={favorites} alt="favorites" />
              <p>Избранное</p>
            </a>
            <a className="links-head__link" href="/">
              <img className="links-head__img" src={basket} alt="basket" />
              <p>Корзина</p>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};
