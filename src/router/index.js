import VueRouter from "vue-router";
import WasaHome from "../pages/WasaHome";
import WasaInput from "../pages/WasaInput";
import WasaEdit from "../pages/WasaEdit";
import WasaTheme from "../pages/WasaTheme";
import WasaList from "../pages/WasaList";

export default new VueRouter({
    mode: "history",
    routes: [{
        path: '/',
        component: WasaHome
    }, {
        path: '/wasaInput',
        component: WasaInput
    }, {
        path: '/wasaEdit',
        component: WasaEdit
    }, {
        path: '/wasaTheme',
        component: WasaTheme
    }, {
        path: '/wasaList',
        component: WasaList
    }]
})