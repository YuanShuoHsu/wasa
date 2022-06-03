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

// const actions = {
//     // theme(context, value) {
//     //     context.commit('THEME', value);
//     // }
// }

// const mutations = {
//     THEME(state, value) {
//         state.themeColor = value;
//     }
// }

// const state = {
//     themeColor: "default"
// }

// // const getters = {
// // }

export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters
    modules: {
        themeAbout: themeOptions
    }
})