import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'zone.js'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

const isProd = true || process.env.NODE_ENV === 'production'

const apps = [
  {
    name: 'vueApp',
    entry: isProd ? '/subs/vue/' : 'http://localhost:5000',
    container: '#vue',
    activeRule: '/vue',
    props: {
      a: 1
    }
  },
  {
    name: 'reactApp',
    entry: isProd ? '/subs/react/' : 'http://localhost:9000',
    container: '#react',
    activeRule: '/react'
  },
  {
    name: 'angularApp',
    entry: isProd ? '/subs/angular/' : 'http://localhost:9000',
    container: '#angular',
    activeRule: '/angular'
  }
]

registerMicroApps(apps)

start()

module?.hot?.accept()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
