import warranty from '../services/api/warranty';
import router from "../router";

export default {
    namespaced: true,
    state: {
        errors: null,
        loading: false,
        notification: null,
        warranty: {
            firstname: null,
            lastname: null,
            email: null,
            contact_number: null,
            address: null,
            suburb: null,
            city: null,
            postcode: null,
            dealer_name: null,
            dealer_location: null,
            subscribe: null,
            product_details: []
        }
    },
    mutations: {
        errors(state, errors) {
            state.errors = errors;
            state.loading = false;
        },
        loading(state) {
            state.loading = true;
        },
        setPersonal(state, response) {
            state.warranty.firstname = response.firstname;
            state.warranty.lastname = response.lastname;
            state.warranty.contact_number = response.contact_number;
            state.warranty.email = response.email;
            state.warranty.address = response.address;
            state.warranty.suburb = response.suburb;
            state.warranty.city = response.city;
            state.warranty.postcode = response.postcode;
        },
        setProduct(state, response) {
            state.warranty.dealer_name = response.dealer_name;
            state.warranty.dealer_location = response.dealer_location;
            state.warranty.subscribe = response.subscribe;
            state.warranty.product_details = response.product_details;
        }
    },
    actions: {
        saveWarranty: async ({ commit, state }) => {
            commit("loading");
            try {
                let response = await warranty.saveWarranty(
                    state.warranty
                );

                if( response ){
                    router.push('/warranty/success');
                }
            } catch (errors) {
                commit("errors", errors);
            }
        }
    }
};