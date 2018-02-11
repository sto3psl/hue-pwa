import config from './config.json'

const url = `${config.url}/${config.userId}`

export async function getLights () {
  return fetch(`${url}/lights`).then(lights => lights.json())
}

export async function getSensors () {
  return fetch(`${url}/sensors`).then(sensors => sensors.json())
}

export async function setLightState (light, state) {
  return fetch(`${url}/lights/${light}/state`,
    {
      method: 'PUT',
      body: JSON.stringify(state)
    }
  )
}
