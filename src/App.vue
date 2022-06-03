<template>
    <div id="app">
        <WasaHeader />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <WasaMenu />
    </div>
</template>

<script>
import WasaHeader from "./components/WasaHeader.vue";
import WasaMenu from "./components/WasaMenu.vue";

export default {
    name: "App",
    data() {
        return {};
    },
    methods: {
        toggleBurger() {
            this.burger = !this.burger;
        },
    },
    components: {
        WasaHeader,
        WasaMenu,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
