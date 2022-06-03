<template>
    <div class="wasaList" :class="themeColor">
        <div class="card" v-for="(user, index) in users" :key="index">
            <div class="userGroup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                    />
                </svg>
                <span>{{ user.name }}</span>
            </div>
            <div class="userGroup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                        d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                    />
                </svg>
                <span> {{ user.city }}</span>
            </div>
        </div>
        <h1 v-show="isLoading">加載中...</h1>
        <h1 v-show="errorMessage">{{ errorMessage }}</h1>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
    name: "WasaList",
    data() {
        return {
            users: [],
            isLoading: false,
            errorMessage: "",
        };
    },
    computed: {
        ...mapState("themeAbout", ["themeColor"]),
    },
    mounted() {
        this.users = [];
        this.isLoading = true;
        this.errorMessage = "";
        axios
            .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
            .then(
                (response) => {
                    this.users = response.data;
                    this.isLoading = false;
                    this.errorMessage = "";
                },
                (error) => {
                    this.users = [];
                    this.isLoading = false;
                    this.errorMessage = error.message;
                }
            );
    },
};
</script>

<style scoped lang="scss">
.wasaList {
    position: relative;
    margin: 20px;
    width: calc(100% - 40px);
    place-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    .card {
        position: relative;
        width: 100%;
        height: 200px;
        border-radius: 10px;
        background: $default-light-color;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .userGroup {
            line-height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
                padding: 4px;
                width: 24px;
                height: 24px;
                border: 1px solid $default-theme;
                border-radius: 4px;
                background: #fefefe;
                fill: $default-theme;
            }
            span {
                width: 140px;
                font-size: 18px;
                font-weight: 500;
                color: $default-theme;
                user-select: none;
            }
        }
    }
    .card.red {
        background: $red-light-color;
    }
    h1 {
        color: $default-theme;
    }
}
.wasaList.red {
    .card {
        background: $red-light-color;
        .userGroup {
            svg {
                border: 1px solid $red-theme;
                fill: $red-theme;
            }
            span {
                color: $red-theme;
            }
        }
    }
    h1 {
        color: $red-theme;
    }
}
.wasaList.blue {
    .card {
        background: $blue-light-color;
        .userGroup {
            svg {
                border: 1px solid $blue-theme;
                fill: $blue-theme;
            }
            span {
                color: $blue-theme;
            }
        }
    }
    h1 {
        color: $blue-theme;
    }
}
@media (max-width: 992px) {
    .wasaList {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 576px) {
    .wasaList {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
