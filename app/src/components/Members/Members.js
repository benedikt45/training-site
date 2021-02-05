import React from 'react'
import './Members.scss'
import MemberCard from "./Member-card";

class Members extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="members">
        <h2>Группа №1</h2>
        <div className="members-wrapper">
          <MemberCard />
        </div>
      </div>
    )
  }
}

export default Members