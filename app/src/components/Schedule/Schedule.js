import React from 'react'
import './Schedule.scss'

function importAll(r) {
  let images = {}
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/))

class Schedule extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const list = this.props.images.map((img) => {
      return (
          <div className="img-wrapper">
            <h2>{img.name}</h2>
            <img src={images[img.path].default} alt={img.alt}/>
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