import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from './../pages/AboutUs';
import News from './../pages/News';
import Projects from './../pages/Projects';
import Contact from './../pages/Contact';

const routes = [
    { path: '/about-us', name: 'About', component: AboutUs },
    { path: '/news', name: 'News', component: News },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/contact', name: 'Contact', component: Contact }
  ];

Vue.use(Router)

export default new Router({
    routes
})