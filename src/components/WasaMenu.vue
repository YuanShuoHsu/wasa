<template>
    <div class="wasaMenu" :class="themeColor">
        <transition>
            <ul v-show="!isShow">
                <li>
                    <router-link
                        @click.native="toggleShow"
                        active-class="active"
                        to="/wasaInput"
                        >Input</router-link
                    >
                </li>
                <li>
                    <router-link
                        @click.native="toggleShow"
                        active-class="active"
                        to="/wasaEdit"
                        >Edit</router-link
                    >
                </li>
                <li>
                    <router-link
                        @click.native="toggleShow"
                        active-class="active"
                        to="/wasaTheme"
                        >Theme</router-link
                    >
                </li>
                <li>
                    <router-link
                        @click.native="toggleShow"
                        active-class="active"
                        to="/wasaList"
                        >List</router-link
                    >
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "WasaMenu",
    data() {
        return {
            isShow: true,
        };
    },
    methods: {
        toggleShow() {
            this.isShow = !this.isShow;
            this.$bus.$emit("closeMenu", this.isShow);
        },
    },
    computed: {
        ...mapState("themeAbout", ["themeColor"]),
    },
    mounted() {
        this.$bus.$on("toggleMenu", (data) => {
            this.isShow = data;
        });
    },
    beforeDestroy() {
        this.$bus.$off("toggleMenu");
    },
};
</script>

<style scoped lang="scss">
.wasaMenu {
    .v-enter-active {
        animation: teste 0.2s linear;
    }
    .v-leave-active {
        animation: teste 0.2s linear reverse;
    }
    @keyframes teste {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
    ul {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: $default-light-color;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
            position: relative;
            list-style: none;
            line-height: 60px;
            a {
                padding: 10px 20px;
                font-size: 18px;
                font-weight: 500;
                color: $default-theme;
                border-radius: 40px;
                text-decoration: none;
                user-select: none;
                transition: 0.2s;
            }
            a:hover {
                background: rgba(254, 254, 254, 0.5);
            }
            a.active {
                background: #fefefe;
            }
        }
    }
}

.wasaMenu.red {
    ul {
        background: $red-light-color;
        li {
            a {
                color: $red-theme;
            }
        }
    }
}
.wasaMenu.blue {
    ul {
        background: $blue-light-color;
        li {
            a {
                color: $blue-theme;
            }
        }
    }
}
</style>
