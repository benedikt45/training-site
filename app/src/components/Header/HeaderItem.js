import React from 'react'

class HeaderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: props.name, prefix: props.prefix }
  }

  render() {
    return (
      <li className={this.state.prefix + "__item"}>
        <a href="#" className={this.state.prefix + "__link"}>{this.state.name}</a>
      </li>
    )
  }
}

export default HeaderItem