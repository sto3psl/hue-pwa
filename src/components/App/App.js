/** @jsx h */
import { h, Component } from 'preact'
import * as api from '../../hue-api'
import styles from './app.css'
import background from '../../img/bg.jpg'

import Light from '../Light/Light'
import Sensor from '../Sensor/Sensor'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      lights: {},
      sensors: {}
    }

    this.getLights = this.getLights.bind(this)
    this.getSensors = this.getSensors.bind(this)
  }

  componentDidMount () {
    this.getLights()
    this.getSensors()
  }

  async getLights () {
    const lights = await api.getLights()
    this.setState(() => ({ lights }))
  }

  async getSensors () {
    const sensors = await api.getSensors()
    this.setState(() => ({ sensors }))
  }

  render () {
    const { lights, sensors } = this.state

    return (
      <div id='app'>
        <img class={styles.background} src={background} alt='background' />
        <header class={styles.header}>
          <h1 class={styles.title}>Home</h1>
        </header>
        <div class={styles.devices}>
          {Object.keys(lights)
            .sort()
            .map(index => (
              <Light
                getLights={this.getLights}
                key={index}
                id={index}
                light={lights[index]}
              />
            ))}
          {Object.keys(sensors)
            .filter(index => sensors[index].type === 'ZLLTemperature')
            .sort()
            .map(index => (
              <Sensor sensor={sensors[index]} />
            ))}
        </div>
      </div>
    )
  }
}
