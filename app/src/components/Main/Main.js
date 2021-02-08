import React from 'react'
import './Main.scss'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section className="main-page">
          {
            this.props.isLogin
                ? <h1>Привет, <span>{this.props.username}</span></h1>
                : <h1>Добро пожаловать! Авторизуйтесь, пожалуйста</h1>
          }
        </section>
    )
  }
}

export default Main