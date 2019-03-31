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
        dealerNameOptions: [],
        dealerType: null,
        serial_email: '',
        checkType: '',
        checkSerialType: '',
        checkData: [],
        invalidSerial : false,
        email: '',
        warranty: {
            firstname: null,
            lastname: null,
            email: null,
            contact_number: null,
            address: null,
            suburb: null,
            city: null,
            country: 'New Zealand',
            postcode: null,
            invoice_number: null,
            dealer_name: null,
            subscribe: null,
            invoice_number: '',
            vehicle_registration: '',
            vehicle_make: '',
            vehicle_model: '',
            serial_number: '',
            product_applied: null
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
        setCheck(state, response){
            state.checkType = response.type;
            state.checkData = response.data;
            state.checkSerialType = response.serial_type;
        },
        setSerialEmail(state, response){
            state.serial_email = response;
        },
        setForm(state, response) {
            state.warranty.firstname = response.firstname;
            state.warranty.lastname = response.lastname;
            state.warranty.contact_number = response.contact_number;
            state.warranty.email = response.email;
            state.warranty.address = response.address;
            state.warranty.suburb = response.suburb;
            state.warranty.city = response.city;
            state.warranty.country = response.country;
            state.warranty.postcode = response.postcode;

            state.warranty.invoice_number = response.invoice_number;
            state.warranty.dealer_name = response.dealer_name;
            state.warranty.vehicle_registration = response.vehicle_registration;
            state.warranty.vehicle_make = response.vehicle_make;
            state.warranty.vehicle_model = response.vehicle_model;
            state.warranty.serial_number = state.serial_email;
            state.warranty.product_type = state.checkSerialType;
            state.warranty.product_applied = response.product_applied;

            state.email = response.email;
        },
        setInvalidSerial(state, invalid) {
            state.invalidSerial = invalid;
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
        setModel(state, models) {
            state.model = models;
        },
        getModelOptions(state, response) {
            state.vehicleModelOptions = response.models;
        },
        setDealerType(state, type) {
            state.dealerType = type;
        },
        getDealerOptions(state, response) {
            state.dealerNameOptions = response.dealers;
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
            state.warranty.product_type = '';
            state.warranty.serial_number = '';
            state.warranty.invoice_number = '';
            state.warranty.vehicle_registration = '';
            state.warranty.vehicle_make = '';
            state.warranty.vehicle_model = '';
            state.warranty.product_applied = '';

            state.email = '';
        }
    },
    actions: {
        getMake: async ({ commit }) => {
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
        getDealer: async ({ commit, state }) => {
            commit("loading");
            try {
                let response = await warranty.getDealer(
                    state.dealerType
                );

                commit("unloading");

                if( response ){
                    commit("getDealerOptions", response);
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
        },
        checkSerialEmailInfo: async ({ commit, state }) => {
            commit("loading");

            try {
                let response = await warranty.checkSerialEmailInfo(
                    state.serial_email
                );

                commit("unloading");

                if( response ){

                    commit("setCheck", response);

                    if( response.type == 'serial_number' ){

                        if( response.count > 0 ){
                            router.push('/warranty/confirm/serial');
                        }
                        else{
                            router.push('/warranty/registration');
                        }
                    }
                    else{
                        if( response.count > 0 ){
                            router.push('/warranty/confirm/email');
                        }
                        else{
                            router.push('/warranty/confirm/email/not-found');
                        }
                    }
                }
            } catch (errors) {

                commit("unloading");
                commit("errors", errors);
                commit("setInvalidSerial", true);
            }

        }
    }
};