import React, {FC, useState} from 'react';
import car from './img/car.png';
import truck from './img/truck.png';
import circle from './img/circle.png';
import oil from './img/oil.png';
import accumulation from './img/accumulation.png';
import close from './img/close.svg';

const selects = [
  { id: 1, value: 'Select 1' },
  { id: 2, value: 'Select 2' },
  { id: 3, value: 'Select 3' },
  { id: 4, value: 'Select 4' },
  { id: 6, value: 'Select 6' },
];

export const FormBlock: FC = () => {
  const [priceStart, setPriceStart] = useState('50');
  const [priceEnd, setPriceEnd] = useState('250000');

  const handleStartPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceStart(event.target.value);
  };

  const handleEndPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceEnd(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPriceStart('50');
    setPriceEnd('250000');
  };

  return (
    <form onSubmit={handleSubmit} className="top__form form">
      <ul className="form__list">
        <li className="form__item">
          <img className="form__img form__img--active" src={car} alt="car" />
          <a className="form__link" href="/">Ссылка 1</a>
        </li>
        <li className="form__item">
          <img className="form__img" src={truck} alt="truck" />
          <a className="form__link" href="/">Ссылка 2</a>
        </li>
        <li className="form__item">
          <img className="form__img" src={circle} alt="circle" />
          <a className="form__link" href="/">Ссылка 3</a>
        </li>
        <li className="form__item">
          <img className="form__img" src={oil} alt="oil" />
          <a className="form__link" href="/">Ссылка 4</a>
        </li>
        <li className="form__item">
          <img className="form__img" src={accumulation} alt="accumulation" />
          <a className="form__link" href="/">Ссылка 5</a>
        </li>
      </ul>
      <div className="form__tabs tabs">
        <a className="tabs__link" href="/">Tab1</a>
        <a className="tabs__link tabs__link--active" href="/">Tab2</a>
      </div>
      <div className="form__selections selections">
        {selects.map(select => (
          <select className={`selections__select selections__select--${select.id}`} key={select.id} name="select1">
            <option value="select1">{select.value}</option>
          </select>
        ))}
        <div className="selections__select selections__price price selections__select--7">
          <p className="price__text">Цена</p>
          <input onChange={handleStartPrice} value={priceStart} className="price__numbers" type="text" />
          <input onChange={handleEndPrice} value={priceEnd} className="price__numbers" type="text" />
        </div>
      </div>
      <div className="form__button-container button-container">
        <button className="button-container__buttons button-container__button-clear" type="submit">
          <img className="button-container__img" src={close} alt="close" />
          <p className="button-container__text">Очистить фильтр</p>
        </button>
        <button className="button-container__buttons button-container__button-apply" type="button">
          Применить фильтр
        </button>
      </div>
    </form>
  );
};
