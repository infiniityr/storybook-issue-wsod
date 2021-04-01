import helloWorldStore from './helloWorld'

export default {
  state: {
    ...helloWorldStore.state
  },
  mutations: {
    ...helloWorldStore.mutations
  },
  actions: {
    ...helloWorldStore.actions
  },
  modules: {
    ...helloWorldStore.modules
  }
}
