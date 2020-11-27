import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable */
Vue.filter('currency', function (value) {
    if (!value || isNaN(value)) return '';

    return parseFloat(value).toFixed(2).replace('.', ',');
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
