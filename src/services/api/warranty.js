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
    },
    identifySerial (serialNumber) {
        return new Promise((resolve, reject) => {
            api.post(
                "warranty/type",
                {"serial_number":serialNumber}
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    getMake () {
        return new Promise((resolve, reject) => {
            api.get(
                "vehicle-info/make"
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    getModel (make) {
        return new Promise((resolve, reject) => {
            api.post(
                "vehicle-info/model",
                {"make":make}
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    getDealer (type) {
        return new Promise((resolve, reject) => {
            api.post(
                "dealer-info/name",
                {"type":type}
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