import React, { FC } from 'react';
import './styles/main.scss';
import { goods } from './goods';
import { Card } from './Card';

export const Main: FC = () => {
  return (
    <main className="main">
      <div className="main__title-cards title-cards">
        <h3 className="title-cards__title">Карточки товаров</h3>
        <div className="title-cards__link-box">
          <a className="title-cards__link" href="/">Ссылка в каталог</a>
          {/* <img className="title-cards__img" src="" alt="" /> */}
          <div className="title-cards__arrow1" />
          <div className="title-cards__arrow2" />
        </div>
      </div>
      <div className="main__cards cards">
        {goods.map(good => (
          <Card good={good} />
        ))}
      </div>
    </main>
  );
};
