import React, { FC } from 'react';
import menu from './img/burger.svg';
import arrow from './img/arrow.png';

export const Menu: FC = () => (
  <div className="top__menu menu">
    <div className="menu__head">
      <div className="menu__button">
        <img className="menu__emblem" src={menu} alt="emblem" />
      </div>
      <div className="menu__title">
        <h3>Меню</h3>
      </div>
    </div>
    <ul className="menu__list">
      <li className="menu__item">
        <a className="menu__link" href="/">Ссылка 1</a>
        <img className="menu__arrow" src={arrow} alt="arrow" />
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/">Ссылка 2</a>
        <img className="menu__arrow" src={arrow} alt="arrow" />
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/">Ссылка 3</a>
        <img className="menu__arrow" src={arrow} alt="arrow" />
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/">Ссылка 4</a>
        <img className="menu__arrow" src={arrow} alt="arrow" />
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/">Ссылка 5</a>
        <img className="menu__arrow" src={arrow} alt="arrow" />
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/">Ссылка 6</a>
        <img className="menu__arrow" src={arrow} alt="arrow" />
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/">Ссылка 7</a>
        <img className="menu__arrow" src={arrow} alt="arrow" />
      </li>
    </ul>
  </div>
);
