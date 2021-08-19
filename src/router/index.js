import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from "@/views/Details";
import Create from "@/views/Create";
import Tag from "@/views/Tag";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    props: true
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
