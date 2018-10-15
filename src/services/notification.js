import Vue from "vue";

export default {
    success(message) {
        Vue.notify({
            group: "notification",
            type: "success",
            title:
                "<i class='icon-success'></i>Success<i class='icon-close'></i>",
            text: message,
            speed: 3000
        });
    },
    error(message) {
        Vue.notify({
            group: "notification",
            type: "error",
            title: "<i class='icon-error'></i>Something went wrong<i class='icon-close'></i>",
            text: message,
            speed: 3000
        });
    },
    warning(message) {
        Vue.notify({
            group: "notification",
            type: "warn",
            title:
                "<i class='icon-warning'></i>Warning<i class='icon-close'></i>",
            text: message,
            speed: 3000
        });
    },
    info(message) {
        Vue.notify({
            group: "notify",
            title:
                "<i class='icon-info'></i>Information<i class='icon-close'></i>",
            text: message,
            speed: 3000
        });
    }
};
