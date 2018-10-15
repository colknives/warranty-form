import api from "./api";

export default {
    saveWarranty (warranty) {
        return new Promise((resolve, reject) => {
            api.post(
                "warranty/save",
                warranty
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    }
}