import React from 'react'
import './HeaderBurger.scss';
import HeaderItem from '../HeaderItem/HeaderItem'

class HeaderBurger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isChecked: false}
  }

  onClickHandler = () => {
    this.setState((state) => ({
      isChecked: !state.isChecked
    }))
  }

  render() {
    return (
      <div className="header__hamburger-menu">
        <input id="menu-hamburger__toggle" type="checkbox" checked={this.state.isChecked}
               onChange={this.onClickHandler}/>
        <label className="menu-hamburger__btn" htmlFor="menu-hamburger__toggle">
          <span></span>
        </label>
        <ul className="menu-hamburger__box">
          {
            this.props.buttons.map((elem) => {
              return (
                <HeaderItem burger={true} onClickHandler={this.onClickHandler} key={elem.id} name={elem.name}
                            prefix={'menu-hamburger'} link={elem.link}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default HeaderBurger