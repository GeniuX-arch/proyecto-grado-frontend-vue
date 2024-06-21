
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import DragDrop from '../views/DragDrop.vue';
import Horario from '../views/Horario.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/drag-drop',
    component: DragDrop
  },
   {
    path: '/horario',
    component: Horario
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;