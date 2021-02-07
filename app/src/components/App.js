import React from 'react'
import './App.scss';
import Header from './Header/Header.js'
import Members from "./Members/Members"
import Schedule from "./Schedule/Schedule";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [{
        name: "Группа №1",
        id: this.randomID(),
        members: [
          {
            name: "Иванов Иван Иванович",
            age: "24",
            id: this.randomID()
          },
          {
            name: "Романов Роман Романович",
            age: "34",
            id: this.randomID()
          },
          {
            name: "Артемов Артем Артемович",
            age: "45",
            id: this.randomID()
          }
        ]
      },
        {
          name: "Группа №2",
          id: this.randomID(),
          members: [
            {
              name: "Иванов Иван Иванович",
              age: "24",
              id: this.randomID()
            },
            {
              name: "Романов Роман Романович",
              age: "34",
              id: this.randomID()
            }
          ]
        }],
      schedule: [
        {name: "Месяц №1", path: "month1.png", alt: "month-1"},
        {name: "Месяц №2", path: "month2.png", alt: "month-2"}
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
      <div className="wrapper">
        <div className="wrapper-header">
          <Header/>
        </div>
        <div className="wrapper-main">
          {
            this.state.groups.map((group) => {
              return <Members key={group.id} name={group.name} members={group.members}/>
            })
          }
          {
            <Schedule images={this.state.schedule} />
          }
        </div>
      </div>
    )
  }
}

export default App;
