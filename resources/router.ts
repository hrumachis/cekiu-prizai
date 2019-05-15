import Vue from 'vue'
import Router from 'vue-router';
import { Position, Route } from 'vue-router/types/router';

// Views
import ViewIndex from './views/index.vue';

// Attach router to Vue
Vue.use( Router );

export default new Router( {
    mode: 'history',
    routes: [
        { path: '/', name: 'Intro', component: ViewIndex }
    ],
    // Every page opens at scroll Position( x: 0, y: 0 )
    scrollBehavior ( to: Route, from: Route, savedPosition: void | Position ) {
        return { x: 0, y: 0 }
    }
} );