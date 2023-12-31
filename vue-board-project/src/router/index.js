import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddList from '../views/AddList.vue'
import UpdateList from '../views/UpdateList.vue'
import ListDetail from '../views/ListDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'addList',
    component: AddList
  },
  {
    path: '/update/:idx',
    name: 'updateList',
    component: UpdateList,
    props: true
  },
  {
    path: '/detail/:idx',
    name: 'listDetail',
    component: ListDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
