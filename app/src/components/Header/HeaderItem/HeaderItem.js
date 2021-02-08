import React from 'react'
import { Link } from "react-router-dom";

class HeaderItem extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {name: props.name, prefix: props.prefix }
  }

  onClickHandler = () => {
    if (this.props.burger) {
      this.props.onClickHandler()
    }
  }

  render() {
    return (
      <li className={this.props.prefix + "__item"}>
        <Link
          to={this.props.link}
          className={this.props.prefix + "__link"}
          onClick={this.onClickHandler}
        >{this.props.name}</Link>
      </li>
    )
  }
}

export default HeaderItem