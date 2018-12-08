import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Playground from '@/components/Playground'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/playground',
      name: 'Playground',
      component: Playground
    }
  ]
})
