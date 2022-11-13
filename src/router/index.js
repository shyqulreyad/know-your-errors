import CreateVue from '@/views/Create.vue'
import DetailsVue from '@/views/Details.vue'
import NotFound from '@/views/NotFound.vue'
import Tag from '@/views/Tag.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/post/:id',
    name:'PostDetail',
    component:DetailsVue,
    props:true
  },
  {
    path:'/create',
    name:'Create',
    component:CreateVue,
  },
  {
    path:'/tag/:tag',
    name:'Tag',
    component:Tag,
  },
    // catching not found routes 
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
