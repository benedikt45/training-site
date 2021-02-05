import React from 'react'
import './App.scss';
import Header from './Header/Header.js'
import Members from "./Members/Members";


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="wrapper">
          <div className="wrapper-header">
            <Header />
          </div>
          <div className="wrapper-main">
            <Members />
          </div>
        </div>
    )
  }
}

export default App;
