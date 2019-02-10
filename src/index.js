import Vue from 'vue';
import App from './App/App';
import router from './router'

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  renderError: (h, err) => h('pre', { style: { color: 'red' }}, err.stack),
  watch: {
    '$route' (to, from) {
      console.log(`change from ${from} to ${to}`);
    }
  }
});
