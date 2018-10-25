import warranty from '../services/api/warranty';
import notification from "../services/notification";
import router from "../router";

export default {
    namespaced: true,
    state: {
        personal: true,
        product: false,
        hasErrors: false,
        errors: null,
        loading: false,
        notification: null,
        serial: '',
        serialKey: '',
        productType: '',
        make: '',
        model: '',
        vehicleMakeOptions: [],
        vehicleModelOptions: [],
        warranty: {
            firstname: null,
            lastname: null,
            email: null,
            contact_number: null,
            address: null,
            suburb: null,
            region: null,
            city: null,
            country: 'New Zealand',
            postcode: null,
            invoice_number: null,
            dealer_name: null,
            dealer_location: null,
            subscribe: null,
            product_details: [
              {
                product_type: '',
                serial_number: '',
                invoice_number: '',
                vehicle_registration: '',
                vehicle_make: '',
                vehicle_model: '',
                purchase_date: '',
                product_applied: [],
                proof_purchase: null,
                proof_purchase_type: null,
                proof_purchase_file: null,
                multiple: false,
                options: []
              }
            ]
        }
    },
    mutations: {
        errors(state, errors) {
            state.errors = errors;
            state.loading = false;
        },
        loading(state) {
            state.hasErrors = false;
            state.loading = true;
        },
        unloading(state) {
            state.loading = false;
        },
        enablePersonal(state){
            state.personal = true;
            state.product = false;
        },
        enableProduct(state){
            state.personal = false;
            state.product = true;
        },
        setPersonal(state, response) {
            state.warranty.firstname = response.firstname;
            state.warranty.lastname = response.lastname;
            state.warranty.contact_number = response.contact_number;
            state.warranty.email = response.email;
            state.warranty.address = response.address;
            state.warranty.suburb = response.suburb;
            state.warranty.city = response.city;
            state.warranty.region = response.region;
            state.warranty.country = response.country;
            state.warranty.postcode = response.postcode;
        },
        setProduct(state, response) {
            state.warranty.invoice_number = response.invoice_number;
            state.warranty.dealer_name = response.dealer_name;
            state.warranty.dealer_location = response.dealer_location;
            state.warranty.subscribe = response.subscribe;
            state.warranty.product_details = response.product_details;
        },
        setSerial(state, serial) {
            state.serial = serial;
        },
        setSerialKey(state, serialKey) {
            state.serialKey = serialKey;
        },
        getProductType(state, response) {
            state.productType = response.type;
        },
        clearProductType(state){
            state.productType = '';
        },
        setMake(state, make) {
            state.make = make;
        },
        getMakeOptions(state, response) {
            state.vehicleMakeOptions = response.makes;
        },
        setModel(state, make) {
            state.model = models;
        },
        getModelOptions(state, response) {
            state.vehicleModelOptions = response.models;
        },
        clearVehicleModel(state){
            state.model = '';
        },
        clearForm(state){
            state.warranty.firstname = null;
            state.warranty.lastname = null;
            state.warranty.contact_number = null;
            state.warranty.email = null;
            state.warranty.address = null;
            state.warranty.suburb = null;
            state.warranty.city = null;
            state.warranty.region = null;
            state.warranty.country = 'New Zealand';
            state.warranty.postcode = null;
            state.warranty.invoice_number = null;
            state.warranty.dealer_name = null;
            state.warranty.dealer_location = null;
            state.warranty.subscribe = null;
            state.warranty.product_details = {};

            state.warranty.product_details.push({
                product_type: '',
                serial_number: '',
                invoice_number: '',
                vehicle_registration: '',
                vehicle_make: '',
                vehicle_model: '',
                purchase_date: '',
                product_applied: [],
                proof_purchase: null,
                proof_purchase_type: null,
                proof_purchase_file: null,
                multiple: false,
                options: []
              });

        }
    },
    actions: {
        getMake: async ({ commit, state }) => {
            commit("loading");

            try {
                let response = await warranty.getMake();

                commit("unloading");

                if( response ){
                    commit("getMakeOptions", response);
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);

                notification.error(errors.errors.message);
            }
        },
        getModel: async ({ commit, state }) => {
            commit("loading");

            try {
                let response = await warranty.getModel(
                    state.make
                );

                commit("unloading");

                if( response ){
                    commit("getModelOptions", response);
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);

                notification.error(errors.errors.message);
            }
        },
        identifySerial: async ({ commit, state }) => {
            commit("loading");

            try {
                let response = await warranty.identifySerial(
                    state.serial
                );

                commit("unloading");

                if( response ){
                    commit("getProductType", response);
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);

                notification.error(errors.errors.message);
            }
        },
        saveWarranty: async ({ commit, state }) => {
            commit("loading");
            
            try {
                let response = await warranty.saveWarranty(
                    state.warranty
                );

                commit("unloading");

                if( response ){
                    router.push('/warranty/success');
                }
            } catch (errors) {

                commit("unloading");
                commit("errors", errors);

                notification.error(errors.errors.message);

            }
        }
    }
};