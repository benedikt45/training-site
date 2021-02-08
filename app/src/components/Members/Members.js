import React from 'react'
import './Members.scss'
import MemberCard from "./MemberCard/MemberCard";

class Members extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: props.name, members: props.members}
  }

  render() {
    return (
      <section className="members-section">
        <div className="members">
          <h3>{this.state.name}</h3>
          <div className="members-wrapper">
            {
              this.state.members.map((member) => {
                return <MemberCard key={member.id} name={member.name} age={member.age}/>
              })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Members