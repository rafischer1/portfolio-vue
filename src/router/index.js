import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import Parallax from '@/components/Parallax'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume,
    },
    {
      path: "/parallax",
      name: "Parallax",
      component: Parallax,
    },
  ],
});
