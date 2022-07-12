<template>
    <div class="wasaTheme" :class="themeColor">
        <select v-model="selectColor">
            <option value="default">Default</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
        </select>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "WasaTheme",
    data() {
        return {
            selectColor: "default",
        };
    },
    computed: {
        ...mapState("themeAbout", ["themeColor"]),
    },
    watch: {
        selectColor() {
            this.$store.commit("themeAbout/THEME", this.selectColor);
        },
    },
};
</script>

<style scoped lang="scss">
.wasaTheme {
    position: relative;
    margin: 20px;
    width: calc(100% - 40px);
    height: 100%;
    select {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid $default-theme;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        color: $default-theme;
        text-align: center;
        outline: none;
    }
}
.wasaTheme.red {
    select {
        border: 1px solid $red-theme;
        color: $red-theme;
    }
}

.wasaTheme.blue {
    select {
        border: 1px solid $blue-theme;
        color: $blue-theme;
    }
}
</style>
