<template>
    <div class="wasaHome" :class="themeColor">
        <h1>線上測驗</h1>
        <div class="requirement">
            <ol>
                <li>用Vue Cli或Nuxt 完成以下功能</li>
                <li>以scss撰寫內容樣式</li>
                <li>應用component功能</li>
                <li>應用computed功能</li>
                <li>
                    製作 輸入類型 text, radio, select
                    、同一component切換prop來改變對應的輸入類型，並可套用v-model
                </li>
                <li>可切換頁面</li>
                <li>設定頁面title, description</li>
                <li>設定Global參數、讓頁面的顏色、主題會隨著更換</li>
                <li>
                    串接一組列表資料api
                    [https://mocki.io/fake-json-api](https://mocki.io/fake-json-api)
                </li>
                <li>
                    程式架構做到最大的沿用性、維護性，並於Readme說明你的想法
                </li>
                <li>使用Firebase Hosting，提供連結給我們進行瀏覽</li>
                <li>提供Github程式碼</li>
            </ol>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "WasaHome",
    data() {
        return {};
    },
    computed: {
        ...mapState("themeAbout", ["themeColor"]),
    },
};
</script>

<style scoped lang="scss">
.wasaHome {
    position: relative;
    margin: 20px;
    width: calc(100% - 40px);
    height: 100%;
    h1 {
        color: $default-theme;
        user-select: none;
    }
    .requirement {
        padding: 20px 40px;
        border: 1px solid $default-theme;
        border-radius: 24px;
        ol {
            li {
                line-height: 40px;
                font-size: 18px;
                font-weight: 500;
                letter-spacing: 1px;
                text-align: left;
                color: $default-theme;
                user-select: none;
            }
        }
    }
}
.wasaHome.red {
    h1 {
        color: $red-theme;
    }
    .requirement {
        border: 1px solid $red-theme;
        ol {
            li {
                color: $red-theme;
            }
        }
    }
}
.wasaHome.blue {
    h1 {
        color: $blue-theme;
    }
    .requirement {
        border: 1px solid $blue-theme;
        ol {
            li {
                color: $blue-theme;
            }
        }
    }
}
</style>
