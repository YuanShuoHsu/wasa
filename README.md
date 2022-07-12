# Wasa
https://wasa-af3ef.web.app/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 線上測驗
1. 用Vue Cli或Nuxt 完成以下功能
2. 以scss撰寫內容樣式
3. 應用component功能
4. 應用computed功能
5. 製作 輸入類型 text, radio, select 、同一component切換prop來改變對應的輸入類型，並可套用v-model
6. 可切換頁面
7. 設定頁面title, description
8. 設定Global參數、讓頁面的顏色、主題會隨著更換
9. 串接一組列表資料api [https://mocki.io/fake-json-api](https://mocki.io/fake-json-api)
10. 程式架構做到最大的沿用性、維護性，並於Readme說明你的想法
11. 使用Firebase Hosting，提供連結給我們進行瀏覽
12. 提供Github程式碼

# Vue CLI
* Vue 腳手架試 Vue 官方提供的標準化開發工具  
* 最新版本是 5.x  
* 文檔：https://cli.vuejs.org/

### 全局安裝 @vue/cli
```
npm install -g @vue/cli
```

### 切換到創建項目的目錄
```
cd Desktop
```

### 使用命令創建項目
```
vue create Wasa
```

### 啟動項目
```
npm run serve
```

### 安裝 normalize.css 
```
npm install --save normalize.css  
```

### 引入 normalize.css
```
import 'normalize.css/normalize.css'
```

### 安裝 sass-loader
```
npm install sass-loader sass webpack --save-dev
```

# 切換輸入類型

## 雙向數據綁定三種 Input 類型
* v-model 用於表單類型標籤用於綁定 value
* .lazy 修飾符，在 change 事件之後進行同步
* .trim 修飾符，自動過濾用戶輸入的首尾空白字符
```
<input type="text" v-model.lazy.trim="textInput" />

<input type="radio" v-model="textInput" value="text" />

<select v-model="textInput">
    <option value="">選擇: Input Type</option>
    <option value="text">text</option>
    <option value="radio">radio</option>
    <option value="select">select</option>
</select>
```

## Radio 類型
* name 表示同一組選項
* id 與 label for 表示同一個選項
* value 表示一個選項的值
```
<input
    type="radio"
    name="radioInput"
    value="text"
    id="text"
/>
<label for="text">text</label>
<input
    type="radio"
    name="radioInput"
    value="radio"
    id="radio"
/>
<label for="radio">radio</label>
<input
    type="radio"
    name="radioInput"
    value="select"
    id="select"
/>
<label for="select">select</label>
```

## v-show 三元運算符
computed 與 watch 之間的區別
* computed 能完成的功能， watch 都可以實現
* watch 能完成的功能，computed 不一定能實現，例如：watch 可以進行異步操作
* 被 Vue 所管理的函數，最好寫成普通函數，這樣 this 的指向才是 vm 或組件實例對象
* 所有不被 Vue 所管理的函數（定時器、ajax、Promise的回調函數），最好寫成箭頭函數，這樣 this 的指向才是 vm 或組件實例對象
```
<template>
    <div>
        <div class="inputGroup" v-show="watchShow === '0' ? true : false">
        <div class="inputGroup" v-show="watchShow === '1' ? true : false">
        </div>
        <div class="inputGroup" v-show="watchShow === '2' ? true : false">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textInput: "text",
            watchShow: "0",
        };
    },
    watch: {
        textInput(newValue) {
            if (newValue == "text") {
                this.watchShow = "0";
            } else if (newValue == "radio") {
                this.watchShow = "1";
            } else if (newValue == "select") {
                this.watchShow = "2";
            }
        }
    }
};
</script>
```

# 切換頁面

## 路由
為了實現 SPA（Single Page Application）應用

## 安裝 vue-router
```
npm install vue-router
```

## 引入 vue-router
```
import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
```

## 編寫 router 配置項
```
import VueRouter from "vue-router";
import WasaHome from "../pages/WasaHome";
import WasaInput from "../pages/WasaInput";
import WasaEdit from "../pages/WasaEdit";
import WasaTheme from "../pages/WasaTheme";
import WasaList from "../pages/WasaList";

export default new VueRouter({
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
```

## 實現切換（active-class 可配置高亮樣式）
```
<router-link
    active-class="active"
    to="/wasaInput"
    >Input</router-link
>
```

## 指定展示位置
```
<router-view></router-view>
```

## 全局事件總線（GlobalEventBus）
一種組件間通信的方式，適用於任意組件間通信
* 一個重要的內置關係：VueComponent.prototype.__proto__  === Vue.prototype
* 讓組件實例對象（vc）可以訪問到 Vue 原型上的屬性、方法

### 安裝全局事件總線
```
new Vue({
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
}).$mount('#app')
```

### 使用全局事件總線
```
<script>
export default {
    name: "WasaHeader",
    methods: {
        toggleBurger() {
            this.burger = !this.burger;
            this.$bus.$emit("toggleMenu", this.burger);
        },
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
```
```
<script>
export default {
    name: "WasaMenu",
    methods: {
        toggleShow() {
            this.isShow = !this.isShow;
            this.$bus.$emit("closeMenu", this.isShow);
        },
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
```

※ 最好在 beforeDestroy 鉤子中，用 $off 去解綁當前組件所用到的事件

# 設定頁面 Title

## 雙向數據綁定
* .lazy 修飾符，在 change 事件之後進行同步
* .trim 修飾符，自動過濾用戶輸入的首尾空白字符
```
<input v-model.lazy.trim="title" />
```

## 互斥顯示
```
<h1 v-show="!isEditTitle">{{ title }}</h1>
<input v-show="isEditTitle" />
```

## 獲取焦點
* this.$nextTick(回調函數)
* 在下一次 DOM 更新結束後執行其指定的回調
* 當改變數據後，要基於更新後的新 DOM 進行某些操作時，要在 nextTick 所指定的回調函數中執行

※ 簡單來說：focus() 執行完，input 框才出現，異步操作用 this.$nextTick()

```
<template>
    <div>
        <h1 @click="toggleEditTitle">{{ title }}</h1>
        <input ref="inputTitle" />
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            title: "This is Title",
            isEditTitle: false,
        };
    },
    methods: {
        toggleEditTitle() {
            this.isEditTitle = true;
            this.$nextTick(function () {
                this.$refs.inputTitle.focus();
            });
        }
    }
};
</script>
```

## 失去焦點
```
<template>
    <div>
        <h1>{{ title }}</h1>
        <input
            @keyup.enter="$event.target.blur()"
            @blur="handleTitleBlur"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "This is Title",
            isEditTitle: false,
        };
    },
    methods: {
        handleTitleBlur() {
            if (this.title === "") {
                this.isEditTitle = true;
            } else if (this.title !== "") {
                this.isEditTitle = false;
            }
        },
    }
};
</script>
```

# 串接 API
發送 Ajax 請求常用的有四種方式

## XMLHttpRequest
```
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
        }
    };
xhttp.open("GET", "xmlhttp_info.txt", true);
xhttp.send();

※ Ajax 請求始祖，開發麻煩，需進行二次封裝
```

## jQuery
* 對 XMLHttpRequest 封裝  
* DOM 操作不推薦

## Axios
* 對 XMLHttpRequest 封裝  
* Promise 風格  
* Vue 創作者 尤雨溪（Evan You） 推薦

## Fetch
* 原生 Fetch 與 XMLHttpRequest 平級
* Promise 風格
* 兩層 Promise，IE 兼容性問題

### 安裝 Axios
```
npm install axios
```

### 請求並查看是否正在加載
```
<template>
    <div>
        <h1 v-show="isLoading">加載中...</h1>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            isLoading: false,
        };
    },
    mounted() {
        this.isLoading = true;
        axios
            .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
            .then(
                (response) => {
                    this.isLoading = false;
                },
                (error) => {
                    this.isLoading = false;
                }
            );
    },
};
</script>
```

### 緩存路由組件
切換組件會經歷銷毀，可用 beforeDestroy()、mounted() 觀測，使用 keep-alive 標籤，讓不展示的路由組件保持掛載，不被銷毀
```
<keep-alive>
    <router-view></router-view>
</keep-alive>
```

### 路由組件生命週期鉤子
路由組件獨有的兩個鉤子，用於捕獲路由組件的激活狀態
* activated 路由組件被激活時觸發
* deactivated 路由組件失活時觸發

# 設定 Global 參數，更換主題

## 設定配置参考 vue.config.js
Load SASS Globally
```
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/scss/variables.scss";`
            },
        }
    }
})
```

## 設定主題色 variables.scss
```
$default-theme: #6f9530;
$default-light-color: #eef2e5;
$red-theme: #8D0044;
$red-light-color: #FFF0F6;
$blue-theme: #273B5B;
$blue-light-color: #E0E8FF;
```

## Vuex
專門在 Vue 中實現集中式狀態，（數據）管理的一個 Vue 插件，對 Vue 應用中多組件的共享狀態進行集中式的管理（讀/寫），也是一種組件間通信的方式，且適用於任何組件通信。
![Vuex](https://vuex.vuejs.org/vuex.png)
> https://vuex.vuejs.org/zh/

* 多個組件依賴於同一狀態
* 來自不同組件的行為需要變更同一狀態

## 創建 Store
```
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const actions = {
    theme(context, value) {
        context.commit('THEME', value);
    }
}

const mutations = {
    THEME(state, value) {
        state.themeColor = value;
    }
}

const state = {
    themeColor: "default"
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})
```
```
<script>
export default {
    watch: {
        selectColor() {
            this.$store.dispatch("theme", this.selectColor);
        },
    },
};
</script>
```

## 跳過 actions 服務，直接 commit mutations
```
<script>
export default {
    watch: {
        selectColor() {
            this.$store.commit("THEME", this.selectColor);
        },
    },
};
</script>
```

## 縮減插值語法 $store.state.themeColor
使用計算屬性 Computed
```
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["themeColor"]),
    },
};
</script>
```

## 模塊化 vuex
```
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
```
```
<script>
import { mapState } from "vuex";
export default {
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
```

# README.md

## 認識 Markdown
Markdown是一種輕量級標記式語言，創始人為約翰·格魯伯。它允許人們使用易讀易寫的純文字格式編寫文件，然後轉換成有效的XHTML（或者HTML）文件。這種語言吸收了很多在電子郵件中已有的純文字標記的特性。

由於Markdown的輕量化、易讀易寫特性，並且對於圖片，圖表、數學式都有支援，目前許多網站都廣泛使用Markdown來撰寫說明文件或是用於論壇上發表訊息。如GitHub、Reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、簡書等，甚至還能被用來撰寫電子書。
> https://zh.wikipedia.org/zh-tw/Markdown

### 標題
```
# 一级標題
## 二级標題
###### 六级標題

<h1>一级標題</h1>
<h2>二级標題</h2>
<h6>六级標題</h6>
```

### 段落
```
段落以空白行分隔
行末兩個空格  産生斷行

<p>段落以空白行分隔</p>
<p>行末兩個空格<br />
產生斷行
</p>
```

### 文本屬性
```
文本屬性：*斜體*、**粗體**、`等寬字型Monospace`

<p>文本屬性：
    <em>斜體</em>、
    <strong>粗體</strong>、
    <code>等寬字型Monospace</code>
</p>
```

### 水平線
```
---

***
___

<hr />
```

### 表格
```
| One Header | Another header | The other header |
| --- | --- |---|
| row1 column1 | row1 column 2 | row1 column 3 |
| row2 column1 | row2 column 2 | row2 column 3 |

<table>
    <thead>
        <tr>
            <th>One Header</th>
            <th>Another header</th>
            <th>The other header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>row1 column1</td>
            <td>row1 column2</td>
            <td>row1 column2</td>
        </tr>
        <tr>
            <td>row2 column1</td>
            <td>row2 column2</td>
            <td>row2 column2</td>
        </tr>
    </tbody>
</table>
```

### 列表
```
* 第一列
* 第二列
* 第三列

※可使用「*」、「-」或「+」，但請勿混用

<ul>
    <li>第一列</li>
    <li>第二列</li>
    <li>第三列</li>
</ul>
```

### 編號列表
```
1. 第一列
2. 第二列
3. 第三列

<ol>
    <li>第一列</li>
    <li>第二列</li>
    <li>第三列</li>
</ol>
```

### 連結
```
[連結](http://example.com)

<p>
    <a href="http://example.com">連結</a>
</p>
```

### 圖片
```
![圖片](picture.png "icon")

<p>
    <img alt="圖片" title="icon" src="picture.png" />
</p>
```

### 引用
```
> 用字元「>」來引用

<blockquote>
    <p>用字元「&gt;」來引用</p>
</blockquote>
```

### 程式碼區塊
```
三個連續的反引號（`）
```

<!-- 
![Vue2 Lifecycle](https://cn.vuejs.org/images/lifecycle.png) -->