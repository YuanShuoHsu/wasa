<template>
    <div class="wasaEdit" :class="themeColor">
        <div class="titleGroup">
            <h1 v-show="!isEditTitle" @click="toggleEditTitle">{{ title }}</h1>
            <input
                v-show="isEditTitle"
                v-model.lazy.trim="title"
                @keyup.enter="$event.target.blur()"
                @blur="handleTitleBlur"
                ref="inputTitle"
                type="text"
                name="title"
                placeholder="Title"
                maxlength="30"
            />
        </div>
        <div class="descriptionGroup">
            <span v-show="!isEditDescription" @click="toggleEditDescription">{{
                description
            }}</span>
            <textarea
                v-show="isEditDescription"
                v-model.lazy.trim="description"
                @keyup.enter="$event.target.blur()"
                @blur="handleDescriptionBlur"
                ref="inputDescription"
                type="text"
                name="description"
                placeholder="Description"
                maxlength="400"
            ></textarea>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "WasaEdit",
    data() {
        return {
            title: "This is Title",
            description: "This is description",
            isEditTitle: false,
            isEditDescription: false,
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
        toggleEditTitle() {
            this.isEditTitle = true;
            this.$nextTick(function () {
                this.$refs.inputTitle.focus();
            });
        },
        handleDescriptionBlur() {
            if (this.description === "") {
                this.isEditDescription = true;
            } else if (this.description !== "") {
                this.isEditDescription = false;
            }
        },
        toggleEditDescription() {
            this.isEditDescription = true;
            this.$nextTick(function () {
                this.$refs.inputDescription.focus();
            });
        },
    },
    computed: {
        ...mapState("themeAbout", ["themeColor"]),
    },
};
</script>

<style scoped lang="scss">
.wasaEdit {
    position: relative;
    margin: 20px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    user-select: none;
    .titleGroup {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            color: $default-theme;
            user-select: none;
            word-break: break-all;
        }
        input {
            margin: 0.67em 0;
            width: 100%;
            font-size: 2em;
            font-weight: 700;
            color: $default-theme;
            border: 1px solid $default-theme;
            border-radius: 4px;
            outline: none;
            text-align: center;
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
    }
    .descriptionGroup {
        height: 300px;
        display: flex;
        justify-content: center;
        span {
            color: $default-theme;
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 1px;
            user-select: none;
            word-break: break-all;
        }
        textarea {
            width: 100%;
            height: 280px;
            border: 1px solid $default-theme;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 1px;
            color: $default-theme;
            text-align: center;
            outline: none;
            resize: none;
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
    }
}

.wasaEdit.red {
    .titleGroup {
        h1 {
            color: $red-theme;
        }
        input {
            color: $red-theme;
            border: 1px solid $red-theme;
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
    }
    .descriptionGroup {
        span {
            color: $red-theme;
        }
        textarea {
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
    }
}
.wasaEdit.blue {
    .titleGroup {
        h1 {
            color: $blue-theme;
        }
        input {
            color: $blue-theme;
            border: 1px solid $blue-theme;
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
    }
    .descriptionGroup {
        span {
            color: $blue-theme;
        }
        textarea {
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
    }
}
</style>
