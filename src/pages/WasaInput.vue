<template>
    <div class="wasaInput" :class="themeColor">
        <div class="inputGroup" v-show="watchShow === '0' ? true : false">
            <input
                type="text"
                v-model.lazy.trim="textInput"
                placeholder="輸入: text、radio、select"
            />
        </div>
        <div class="inputGroup" v-show="watchShow === '1' ? true : false">
            <input
                type="radio"
                name="radioInput"
                v-model="textInput"
                value="text"
                id="text"
            />
            <label for="text">text</label>
            <input
                type="radio"
                name="radioInput"
                v-model="textInput"
                value="radio"
                id="radio"
            />
            <label for="radio">radio</label>
            <input
                type="radio"
                name="radioInput"
                v-model="textInput"
                value="select"
                id="select"
            />
            <label for="select">select</label>
        </div>
        <div class="inputGroup" v-show="watchShow === '2' ? true : false">
            <select v-model="textInput">
                <option value="">選擇: Input Type</option>
                <option value="text">text</option>
                <option value="radio">radio</option>
                <option value="select">select</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "WasaInput",
    data() {
        return {
            message: "Wasa",
            textInput: "text",
            watchShow: "0",
        };
    },
    computed: {
        ...mapState("themeAbout", ["themeColor"]),
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
        },
    },
};
</script>

<style scoped lang="scss">
.wasaInput {
    position: relative;
    margin: 20px;
    width: calc(100% - 40px);
    height: 100%;
    display: flex;
    flex-direction: column;
    .inputGroup {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        input[type="text"] {
            width: 100%;
            height: 40px;
            border: 1px solid $default-theme;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 500;
            color: $default-theme;
            text-align: center;
            outline: none;
        }
        ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: $default-theme;
            opacity: 1;
            /* Firefox */
        }
        :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: $default-theme;
        }
        ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: $default-theme;
        }
        label {
            margin: 0 10px;
            padding: 0 0 0 20px;
            width: 80px;
            height: 40px;
            border: 1px solid $default-theme;
            border-radius: 4px;
            background: #fefefe;
            font-size: 16px;
            font-weight: 500;
            color: $default-theme;
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
            cursor: pointer;
        }
        label::before {
            content: "";
            position: absolute;
            margin: 0 60px 0 0;
            width: 10px;
            height: 10px;
            border: 1px solid $default-theme;
            border-radius: 50%;
            background: transparent;
        }
        label::after {
            content: "";
            position: absolute;
            margin: 0 60px 0 0;
            width: 0px;
            height: 0px;
            background: $default-theme;
            border-radius: 50%;
            transition: 0.2s;
        }
        label:nth-child(2) {
            letter-spacing: 2px;
        }
        label:nth-child(4) {
            letter-spacing: 1px;
        }
        label:nth-child(6) {
            letter-spacing: 0px;
        }
        input[type="radio"] {
            display: none;
        }
        input[type="radio"]:checked + label::after {
            width: 8px;
            height: 8px;
        }
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
}
.wasaInput.red {
    .inputGroup {
        input[type="text"] {
            border: 1px solid $red-theme;
            color: $red-theme;
        }
        ::placeholder {
            color: $red-theme;
        }
        :-ms-input-placeholder {
            color: $red-theme;
        }
        ::-ms-input-placeholder {
            color: $red-theme;
        }
        label {
            border: 1px solid $red-theme;
            color: $red-theme;
        }
        label::before {
            border: 1px solid $red-theme;
        }
        label::after {
            background: $red-theme;
        }
        select {
            border: 1px solid $red-theme;
            color: $red-theme;
        }
    }
}
.wasaInput.blue {
    .inputGroup {
        input[type="text"] {
            border: 1px solid $blue-theme;
            color: $blue-theme;
        }
        ::placeholder {
            color: $blue-theme;
        }
        :-ms-input-placeholder {
            color: $blue-theme;
        }
        ::-ms-input-placeholder {
            color: $blue-theme;
        }
        label {
            border: 1px solid $blue-theme;
            color: $blue-theme;
        }
        label::before {
            border: 1px solid $blue-theme;
        }
        label::after {
            background: $blue-theme;
        }
        select {
            border: 1px solid $blue-theme;
            color: $blue-theme;
        }
    }
}
</style>
