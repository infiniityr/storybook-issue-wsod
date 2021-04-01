
const state = {
  hello: ''
}

const mutations = {
  setHelloWorld (stateRef, text) {
    stateRef.hello = text
  }
}

const actions = {
  initializeHello: ({ commit }) => {
    return setTimeout(() => {
      commit('setHelloWorld', 'My super Hello World')
    }, 1000)
  }
}

const getters = {
  getUpperHello: stateRef => stateRef.hello.toUpperCase()
}

export default {
  state,
  mutations,
  actions,
  getters
}
