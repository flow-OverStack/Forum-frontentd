import './Header.css'
import React, { ComponentProps } from 'react';
import Burger from '../../assets/burger-menu.svg'

type Page = "question" | "hero" | "topics"

type HeaderProps = {
  setPage: React.Dispatch<React.SetStateAction<'question' | 'hero' | 'topics'>>;
  page: Page
};

const Header = ({ setPage, page }: HeaderProps) => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        fastQ
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <button className={`header__nav-link ${page === 'hero' ? 'is-active' : ''}`} onClick={() => {
              setPage('hero')
            }}>О форуме</button>
          </li>
          <li className="header__nav-item">
            <button className={`header__nav-link ${page === 'topics' ? 'is-active' : ''}`} onClick={() => {
              setPage('topics')
            }}>Темы</button>
          </li>
          <li className="header__nav-item">
            <button className={`header__nav-link ${page === 'question' ? 'is-active' : ''}`} onClick={() => {
              setPage('question')
            }}>Задать вопрос</button>
          </li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button className="header__buttons-up">Вход</button>
        <button className="header__buttons-in">Регистрация</button>
      </div>
      <button className="header__burger">
        <Burger className="header__burger-icon"/>
      </button>
    </header>
  );
};

export default Header;
