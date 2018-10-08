import api from "./api";

export default {
    isLogin() {
        return !!this.getUser();
    },

    merchantUuid() {
        return this.getUser().merchant_uuid;
    },

    getAuth() {
        return JSON.parse(localStorage.getItem("auth"));
    },
    getToken() {
        return localStorage.getItem("token");
    },
    getRefreshToken() {
        return JSON.parse(localStorage.getItem("refreshToken"));
    },
    getHeader() {
        return { Authorization: this.getToken() };
    },

    setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    },
    setToken(token) {
        localStorage.setItem("token", token);
    },
    setRefreshToken(refreshToken) {
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    },

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    },

    login(username, password) {
        let self = this;

        return new Promise((resolve, reject) => {
            api.post("merchant-auth-service/auth/login", {
                username,
                password
            })
                .then(response => {
                    self.setUser(response.user);
                    self.setToken(response.token);
                    self.setRefreshToken(response.refresh_token);

                    resolve(response);
                })
                .catch(e => {
                    reject(e.errors);
                });
        });
    }
};
