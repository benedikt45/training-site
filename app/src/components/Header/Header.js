import React from 'react'
import './Header.scss'
import logo from './logo-training.png'
import HeaderItem from './HeaderItem/HeaderItem'
import HeaderBurger from './HeaderBurger/HeaderBurger'
import {Link} from "react-router-dom"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {
          name: "Главная страница",
          id: this.randomID(),
          link: "/"
        },
        {
          name: "Расписание",
          id: this.randomID(),
          link: "/schedule"
        },
        {
          name: "Участники",
          id: this.randomID(),
          link: "/members"
        },
        {
          name: "Результаты",
          id: this.randomID(),
          link: "/results"
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
          <Link to="/" className="header-logo"><img src={logo} alt="Logo"/></Link>
          <ul className="header-menu">
            {
              this.state.buttons.map((elem) => {
                return (
                    <HeaderItem burger={false} key={elem.id} name={elem.name} prefix={'header-menu'} link={elem.link}/>
                )
              })
            }
          </ul>
          <HeaderBurger buttons={this.state.buttons}/>
        </div>
    )
  }
}


export default Header;