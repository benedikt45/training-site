import React from 'react'
import './Header.scss'
import logo from './logo-training.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="header">
          <a href="#" className="header-logo"><img src={logo} alt="Logo"/></a>
          <ul className="header-menu">
            <li className="header-menu__item">
              <a href="#" className="header-menu__link">Главная страница</a>
            </li>
            <li className="header-menu__item">
              <a href="#" className="header-menu__link">Расписание</a>
            </li>
            <li className="header-menu__item">
              <a href="#" className="header-menu__link">Участники</a>
            </li>
            <li className="header-menu__item">
              <a href="#" className="header-menu__link">Результаты</a>
            </li>
          </ul>
        </div>
    )
  }
}

export default Header;