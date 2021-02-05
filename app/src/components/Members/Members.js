import React from 'react'
import './Members.scss'
import MemberCard from "./Member-card";

class Members extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="members-section">
        <div className="members">
          <h2>Группа №1</h2>
          <div className="members-wrapper">
            <MemberCard />
          </div>
        </div>
      </section>
    )
  }
}

export default Members