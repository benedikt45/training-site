import React from 'react'
import './Schedule.scss'

class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: props.images
    }
  }

  render() {
    const list = this.state.images.map((img) => {
      return (
        <div className="img-wrapper">
          <h2>{img.name}</h2>
          <img src={img.path} alt={img.alt}/>
        </div>
      )
    })

    return (
      <section className="schedule">
        {list}
      </section>
    )
  }
}

export default Schedule