<template>
    <div class="wasaHeader" :class="themeColor">
        <div class="wasaLogo">
            <router-link to="/">
                <img src="./../assets/wasaTeam.png" alt="wasaTeam"
            /></router-link>
            <span>Hello, {{ name }}</span>
        </div>
        <div class="svgGroup">
            <svg
                v-show="burger"
                @click="toggleBurger"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                />
            </svg>
            <svg
                v-show="!burger"
                @click="toggleBurger"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "WasaHeader",
    data() {
        return {
            name: "Wasa",
            burger: true,
        };
    },
    methods: {
        toggleBurger() {
            this.burger = !this.burger;
            this.$bus.$emit("toggleMenu", this.burger);
        },
    },
    computed: {
        ...mapState("themeAbout", ["themeColor"]),
    },
    mounted() {
        this.$bus.$on("closeMenu", (data) => {
            this.burger = data;
        });
    },
    beforeDestroy() {
        this.$bus.$off("closeMenu");
    },
};
</script>

<style scoped lang="scss">
.wasaHeader {
    position: relative;
    padding: 0px 20px;
    height: 80px;
    border-bottom: 1px solid $default-light-color;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .wasaLogo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        user-select: none;
        img {
            position: relative;
            width: 80px;
            height: 80px;
        }
        span {
            font-size: 24px;
            font-weight: 700;
            color: $default-theme;
        }
    }
    .svgGroup {
        position: relative;
        display: flex;
        align-items: center;
        svg {
            margin: 0 10px;
            padding: 4px;
            width: 30px;
            height: 30px;
            border: none;
            border-radius: 4px;
            background: $default-theme;
            fill: #fefefe;
            cursor: pointer;
            z-index: 1;
            transition: 0.5s;
            path {
                pointer-events: none;
            }
        }
        svg:hover {
            opacity: 0.8;
        }
    }
}
.wasaHeader.red {
    border-bottom: 1px solid $red-light-color;
    .wasaLogo {
        span {
            color: $red-theme;
        }
    }
    .svgGroup {
        svg {
            background: $red-theme;
        }
    }
}
.wasaHeader.blue {
    border-bottom: 1px solid $blue-light-color;
    .wasaLogo {
        span {
            color: $blue-theme;
        }
    }
    .svgGroup {
        svg {
            background: $blue-theme;
        }
    }
}
</style>
