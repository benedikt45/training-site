import React from 'react'

class HeaderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: props.name}
  }

  render() {
    return (
      <li className="header-menu__item">
        <a href="#" className="header-menu__link">{this.state.name}</a>
      </li>
    )
  }
}

export default HeaderItem