import React from 'react'
import './Member-card.scss'
import avatar from './avatar.png'

class MemberCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <a href="#" className="members-card">
          <div className="members-card__avatar">
            <img src={avatar} alt="Avatar"/>
          </div>
          <div className="members-card__right">
            <div className="members-card__header">Альберт Иванович Иванов</div>
            <div className="members-card__body">
              <span>Возраст: 24</span>
            </div>
          </div>
          {/*<div className="members-card__footer"></div>*/}
        </a>
    )
  }
}

export default MemberCard