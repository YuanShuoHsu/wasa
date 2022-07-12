import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
const themeOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        THEME(state, value) {
            state.themeColor = value;
        }
    },
    state: {
        themeColor: "default"
    },
    getters: {}
}

export default new Vuex.Store({
    modules: {
        themeAbout: themeOptions
    }
})