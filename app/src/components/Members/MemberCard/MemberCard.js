import React from 'react'
import './MemberCard.scss'
import avatar from '../avatar.png'

class MemberCard extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {name: props.name, age: props.age}
  }

  render() {
    return (
        <a href="#" className="members-card">
          <div className="members-card__avatar">
            <img src={avatar} alt="Avatar"/>
          </div>
          <div className="members-card__right">
            <div className="members-card__header">{this.props.name}</div>
            <div className="members-card__body">
              <span>Возраст: {this.props.age}</span>
            </div>
          </div>
        </a>
    )
  }
}

export default MemberCard