/** @jsx h */
import { h, render } from 'preact'
import App from './components/App/App'

const root = document.getElementById('app')

function boot () {
  render(<App />, document.body, root)
}

boot()
