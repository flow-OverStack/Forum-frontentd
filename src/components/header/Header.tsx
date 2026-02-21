import "react"
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        fastQ
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">О форуме</a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Темы</a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Задать вопрос</a>
          </li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button className="header__buttons-up">Вход</button>
        <button className="header__buttons-in">Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
