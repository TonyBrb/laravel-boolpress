//importare vue e vuerouter
import Vue from "vue";
import VueRouter from "vue-router";

//iniettare VueRouter dentro Vue
Vue.use(VueRouter);

//importazione componenti delle pagine
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Posts from './components/pages/Posts';

//inizializzare la classe del router che conterrà tutte le rotte

const router = new VueRouter({
  mode:'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/blog',
      name: 'blog',
      component: Posts
    }
  ]
});

//esportiamo la classe router
export default router;