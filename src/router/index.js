import VueRouter from "vue-router";
import WasaHome from "../pages/WasaHome";
import WasaInput from "../pages/WasaInput";
import WasaEdit from "../pages/WasaEdit";
import WasaTheme from "../pages/WasaTheme";
import WasaList from "../pages/WasaList";

export default new VueRouter({
    // mode: 'hash',
    routes: [{
        path: '/',
        component: WasaHome
    }, {
        // name: 'wasaInput',
        // :to="{ name: 'wasaInput' }"
        path: '/wasaInput',
        component: WasaInput
    }, {
        // name: 'wasaEdit',
        // :to="{ name: 'wasaEdit' }"
        path: '/wasaEdit',
        component: WasaEdit
    }, {
        // name: 'wasaEdit',
        // :to="{ name: 'wasaEdit' }"
        path: '/wasaTheme',
        component: WasaTheme
    }, {
        // name: 'wasaList',
        // :to="{ name: 'wasaList' }"
        path: '/wasaList',
        component: WasaList
    }]
})