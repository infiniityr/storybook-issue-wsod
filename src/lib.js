import store from './store'

import HelloWorld from './components/HelloWorld/HelloWorld.vue'

export default {
  install (Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialize the plugin with a Vuex store.')
    }
    if (!options || !options.router) {
      throw new Error('Please initialize the plugin with a VueRouter instance.')
    }
    if (!Vue.axios) {
      throw new Error('Please initialize Vue-axios.')
    }

    if (!Vue.prototype.$project) {
      Vue.prototype.$project = 'project'
    }

    options.store.registerModule('frontProject', store(Vue))

    // -- Components available
    Vue.component(HelloWorld.name, HelloWorld)
  }
}

export { HelloWorld }
