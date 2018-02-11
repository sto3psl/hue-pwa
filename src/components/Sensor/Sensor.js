/** @jsx h */
import { h } from 'preact'
import styles from './sensor.css'

export default function Sensor ({ sensor }) {
  const { name, state } = sensor
  return (
    <div class={styles.sensor}>
      🌡{'\n'}{name.replace('Temperatur', '')}{'\n'}
      {Math.round(state.temperature / 100)}°C
    </div>
  )
}
