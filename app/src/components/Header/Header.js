import React from 'react'
import './Header.scss'
import logo from './logo-training.png'
import HeaderItem from './HeaderItem/HeaderItem'
import HeaderBurger from './HeaderBurger/HeaderBurger'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {
          name: "Главная страница",
          id: this.randomID()
        },
        {
          name: "Расписание",
          id: this.randomID()
        },
        {
          name: "Участники",
          id: this.randomID()
        },
        {
          name: "Результаты",
          id: this.randomID()
        }
      ]
    }
  }

  randomID() {
    let max = 100000000
    let min = 1
    return Math.random() * (max - min) + min;
  }

  render() {

    return (
      <div className="header">
        <a href="#" className="header-logo"><img src={logo} alt="Logo"/></a>
        <ul className="header-menu">
          {
            this.state.buttons.map((elem) => {
              return (
                <HeaderItem key={elem.id} name={elem.name} prefix={'header-menu'} buttons={this.state.buttons} />
              )
            })
          }
        </ul>
        <HeaderBurger buttons={this.state.buttons} />
      </div>
    )
  }
}


export default Header;