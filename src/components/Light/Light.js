/** @jsx h */
import { h, Component } from 'preact'
import { setLightState } from '../../hue-api'
import styles from './light.css'

export default class Light extends Component {
  constructor () {
    super()

    this.setLightState = this.setLightState.bind(this)
  }

  async setLightState () {
    await setLightState(this.props.id, { on: !this.props.light.state.on })
    this.props.getLights()
  }

  render () {
    const { light } = this.props
    return (

      <button class={light.state.on ? styles.lightOn : styles.light} onClick={this.setLightState}>
          💡{'\n'}
        {light.name.replace('Lampe', '')}
      </button>
    )
  }
}
