import useStore from '../../store'

function authIsexit() {
  return new Promise((resolve) => {
    resolve()
  })
}

async function setAuthStorage() {
  useStore().handleIsLogined(true)
}

export {
  authIsexit, setAuthStorage
}
