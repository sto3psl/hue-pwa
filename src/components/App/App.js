/** @jsx h */
import { h, Component } from 'preact'
import * as api from '../../hue-api'
import './app.css'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      lights: []
    }
  }

  async componentDidMount () {
    const lights = await api.getLights()
    this.setState(() => ({ lights }))
  }

  render () {
    return (
      <div id='app'>
        <h1>💡💡💡</h1>
        <ul>
          {Object.keys(this.state.lights)
            .sort()
            .map(index => (
              <li key={this.state.lights[index].id}>
                <button
                  onClick={() => {
                    api.setLightState(index, { on: !this.state.lights[index].state.on })
                    this.setState(prevState => ({
                      lights: {
                        ...prevState.lights,
                        [index]: {
                          ...prevState.lights[index],
                          state: {
                            ...prevState.lights[index].state,
                            on: !prevState.lights[index].state.on
                          }
                        }
                      }
                    }))
                  }}
                >
                  <span
                    style={{
                      filter: this.state.lights[index].state.on ? null : 'grayscale(100%)'
                    }}
                  >
                    💡
                  </span>

                  {this.state.lights[index].name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}
