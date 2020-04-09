import React, { FC } from 'react';
import './style/footer.scss';
import test from './img/test.png';
import emblem from './img/emblem.svg';

export const Footer: FC = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="footer__blocks">
        <div className="block1">
          <div className="block1__top">
            <h4 className="block1__head">Блок 1</h4>
          </div>
          <h3 className="block1__title1">Будьте в курсе новостей и новинок!</h3>
          <h2 className="block1__title2">Подписывайтесь на рассылку</h2>
          <form className="block1__form">
            <input className="block1__input" type="text" placeholder="Укажите свой email для подписки" />
            <button className="block1__button" type="button">Подписаться</button>
          </form>
        </div>
        <div className="footer__blocks-small">
          <div className="block2 footer__block2">
            <div className="block2__top">
              <h4 className="block2__head">Блок ссылок 1</h4>
            </div>
            <ul className="block2__list">
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 1</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 2</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 3</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 4</a>
              </li>
            </ul>
          </div>
          <div className="block2 footer__block2">
            <div className="block2__top">
              <h4 className="block2__head">Блок 2</h4>
            </div>
            <ul className="block2__list">
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 1</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 2</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 3</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 4</a>
              </li>
            </ul>
          </div>
          <div className="block2 footer__block2">
            <div className="block2__top">
              <h4 className="block2__head">Блок ссылок 3</h4>
            </div>
            <ul className="block2__list">
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 1</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 2</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 3</a>
              </li>
              <li className="block2__item">
                <a href="/" className="block2__link">Ссылка 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom bottom">
        <div className="bottom__emblems">
          <img className="bottom__img" src={test} alt="test" />
          <p className="bottom__text">© Copyrith 2017. Тестовое задание Wezom</p>
        </div>
        <div className="bottom__box">
          <div className="bottom__contacts contacts">
            <div className="contacts__contact contacts__contact--vk" />
            <div className="contacts__contact contacts__contact--facebook" />
            <div className="contacts__contact contacts__contact--twitter" />
            <div className="contacts__contact contacts__contact--youtube" />
          </div>
          <div className="bottom__end end">
            <img src={emblem} alt="w" />
            <div className="end__test-block">
              <p className="end__text1">Разработка тестового</p>
              <p className="end__text2">Wezom Agency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
