import React, { FC } from 'react';

export const Search: FC = () => (
  <form className="top__search search">
    <input className="search__input" type="text" placeholder="Поиск по сайту" />
    <div>
      <select className="search__select" name="select">
        <option>Все категории</option>
        <option value="select1">Select 1</option>
        <option value="select2">Select 2</option>
        <option value="select3">Select 3</option>
        <option value="select4">Select 4</option>
        <option value="select5">Select 5</option>
      </select>
      <button className="search__button" type="button">Поиск</button>
    </div>
  </form>
);
