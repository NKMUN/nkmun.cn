import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Previous from '@/components/Previous'
import Contact from '@/components/Contact'
import Resource from '@/components/Resource'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/previous',
      name: 'Previous',
      component: Previous
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource
    }
  ]
})

export default router
