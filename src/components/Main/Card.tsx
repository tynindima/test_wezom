import React, { FC } from 'react';
import sun from './img/sun.png';
import car from './img/car.png';
import newTire from './img/newTire.png';
import basket from './img/basket.png';
import compare from './img/compare.png';
import favorites from './img/favorites.png';

interface Props {
  good: Good;
}

export const Card: FC<Props> = ({ good }) => (
  <div key={good.id} className="card">
    <p className="card__mark">Mark</p>
    <a className="card__text" href="/">
      <p>Антифриз Fosser Antifreeze</p>
      <p>{good.title1}</p>
    </a>
    <div className="card__info">
      <div className="card__reviews">
        <div className={`card__stars stars ${good.starClass}`}>
          <div className="stars__star" />
          <div className="stars__star" />
          <div className="stars__star" />
          <div className="stars__star" />
          <div className="stars__star" />
        </div>
        <p className="card__review">{good.reviews}</p>
      </div>
      <p className="card__presence">В наличии: 24 шт.</p>
    </div>
    <div className="card__goods">
      <div className="goods-kinds">
        {good.kinds.summer
          ? (
            <div className="goods-kinds__kind">
              <img className="goods-kinds__img" src={sun} alt="sun" />
              <p className="goods-kinds__text">Летняя</p>
            </div>
          )
          : (<div />)}
        {good.kinds.passenger
          ? (
            <div className="goods-kinds__kind">
              <img className="goods-kinds__img" src={car} alt="car" />
              <p className="goods-kinds__text">Легковая</p>
            </div>
          )
          : (<div />)}
        {good.kinds.newTire
          ? (
            <div className="goods-kinds__kind">
              <img className="goods-kinds__img" src={newTire} alt="new" />
              <p className="goods-kinds__text">Новая</p>
            </div>
          )
          : (<div />)}
      </div>
      <img className="card__img" src={good.img} alt="tire" />
    </div>
    <div className="card__additions">
      {good.additions.latest
        ? (<p className="card__addition card__addition--latest">Новинка</p>)
        : (<p />)}
      {good.additions.hit
        ? (<p className="card__addition card__addition--hit">Хит</p>)
        : (<p />)}
      {good.additions.discount
        ? (<p className="card__addition card__addition--discount">Скидка</p>)
        : (<p />)}
    </div>
    <div className="card__price-box">
      <p className="card__price">
        <span className="card__price card__price--big">{good.price}</span>
        {' '}
        грн
      </p>
      {good.discount !== ''
        ? (<p className="card__discount">{`${good.discount} грн.`}</p>)
        : (<p />)}
    </div>
    <button className="card__button" type="button">
      <img className="card__button-img" src={basket} alt="backet" />
      <p className="card__button-text">Купить товар</p>
    </button>
    <div className="card__compares">
      <div className="card__compare">
        <img className="card__compare-img" src={compare} alt="libra" />
        <a className="card__compare-text" href="/">Сравнить товар</a>
      </div>
      <div className="card__compare">
        <img className="card__compare-img" src={favorites} alt="star" />
        <a className="card__compare-text" href="/">В избранное</a>
      </div>
    </div>
  </div>
);
