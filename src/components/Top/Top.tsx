import React from 'react';
import { Menu } from './Menu';
import { Search } from './Search';
import { FormBlock } from './FormBlock';
import './styles/top.scss';

export const Top = () => {
  return (
    <section className="top">
      <Menu />
      <Search />
      <FormBlock />
    </section>
  );
};
