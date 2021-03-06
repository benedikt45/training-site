import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import "./App.scss"
import Header from "./Header/Header.js"
import Members from "./Members/Members"
import Schedule from "./Schedule/Schedule"
import Main from "./Main/Main";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Roman',
      isLogin: false,
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
        <Router>
          <div className="wrapper">
            <div className="wrapper-header">
              <Header/>
            </div>
            <div className="wrapper-main">
              <Switch>
                <Route path="/members">
                  {this.state.groups.map((group) => {
                    return <Members key={group.id} name={group.name} members={group.members}/>
                  })}
                </Route>

                <Route path="/schedule">
                  <Schedule images={this.state.schedule}/>
                </Route>

                <Route path="/">
                  <Main isLogin={this.state.isLogin} username={this.state.username}/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
    )
  }
}

export default App;
