<template>
  <div class="warranty-personal-form">
    <b-form>
      <b-row>
        <b-col md="12">
          <div class="warranty-notification">
            <b-row>
              <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="success" icon="check-circle" /></b-col>
              <b-col>
                <p><h5>{{ checkSerialType }} Product Validated.</h5>
                <small>Your Warranty Number {{ serial_email }} is valid for a lifetime warranty. <a href="#">Check another Serial Number</a>
                </small></p>
              </b-col>
            </b-row>
          </div>
          <div class="warranty-notification">
            <b-row>
              <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="info" icon="info-circle" /></b-col>
              <b-col>
                <p><h5>Warranty not yet Registered.</h5>
                <small>Our records indicates that the serial number you have entered is not yet registered. In order to claim your lifetime warranty coverage, you need to register your warranty number.
                </small></p>
              </b-col>
            </b-row>
          </div>
          <div class="warranty-notification" v-if="checkSerialType == 'DURA SEAL Leather Protection'">
            <b-row>
              <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="info" icon="info-circle" /></b-col>
              <b-col>
                <p><h5>DURA-SEAL Leather Protection</h5>
                <small>If you have purchased DURA SEAL Leather together with your DURA-SEAL product, you need to register it separately so you can claim it separately
                </small></p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <h4><strong>Personal Details</strong></h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="6">
          <b-form-group id="firstNameGroup"
                        class="required"
                        label="First Name:"
                        label-for="firstname">
            <b-form-input id="firstname"
                          type="text"
                          required
                          v-model="form.firstname"
                          :state="($v.form.firstname.$dirty && $v.form.firstname.$invalid)? false : null"
                          @blur.native="$v.form.firstname.$touch()"
                          aria-describedby="input1LiveFeedback"
                          placeholder="Enter First Name">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.firstname.required">
              First Name is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="lastNameGroup"
                        class="required"
                        label="Last Name:"
                        label-for="lastname">
            <b-form-input id="lastname"
                          type="text"
                          required
                          v-model="form.lastname"
                          :state="($v.form.lastname.$dirty && $v.form.lastname.$invalid)? false : null"
                          @blur.native="$v.form.lastname.$touch()"
                          placeholder="Enter Last Name">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.lastname.required">
              Last Name is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="mobileGroup"
                        class="required"
                        label="Contact Number:"
                        label-for="mobile">
            <b-form-input id="mobile"
                          type="text"
                          required
                          v-model="form.contact_number"
                          :state="($v.form.contact_number.$dirty && $v.form.contact_number.$invalid)? false : null"
                          @blur.native="$v.form.contact_number.$touch()"
                          placeholder="Enter Contact Number">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.contact_number.required">
              Contact Number is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="emailGroup"
                        class="required"
                        label="Email Address:"
                        label-for="email">
            <b-form-input id="email"
                          type="text"
                          required
                          v-model="form.email"
                          :state="($v.form.email.$dirty && $v.form.email.$invalid)? false : null"
                          @blur.native="$v.form.email.$touch()"
                          placeholder="Enter Email">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.required">
              Email is a required field
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.email.email">
              Please provide a valid email address
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group id="addressGroup"
                        class="required"
                        label="Street Number and Name:"
                        label-for="address">
            <b-form-input id="address"
                          type="text"
                          required
                          v-model="form.address"
                          :state="($v.form.address.$dirty && $v.form.address.$invalid)? false : null"
                          @blur.native="$v.form.address.$touch()"
                          placeholder="Enter Address">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.address.required">
              Address is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="suburbGroup"
                        label="Suburb:"
                        label-for="suburb">
            <b-form-input id="suburb"
                          type="text"
                          required
                          v-model="form.suburb"
                          :state="($v.form.suburb.$dirty && $v.form.suburb.$invalid)? false : null"
                          @blur.native="$v.form.suburb.$touch()"
                          placeholder="Enter Suburb">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.suburb.required">
              Suburb is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="cityGroup"
                        class="required"
                        label="City:"
                        label-for="city">
            <b-form-input id="city"
                          type="text"
                          required
                          v-model="form.city"
                          :state="($v.form.city.$dirty && $v.form.city.$invalid)? false : null"
                          @blur.native="$v.form.city.$touch()"
                          placeholder="Enter City">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.city.required">
              City is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group id="Country"
                        class="required"
                        label="Country:"
                        label-for="Country">
            <b-form-select id="Country"
                            v-model="form.country"
                            :state="($v.form.country.$dirty && $v.form.country.$invalid)? false : null"
                            @blur.native="$v.form.country.$touch()"
                            :options="countryOptions" 
                            required/>
            <b-form-invalid-feedback v-if="!$v.form.country.required">
              Country is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="postCodeGroup"
                        class="required"
                        label="Post Code:"
                        label-for="postcode">
            <b-form-input id="postcode"
                          type="text"
                          required
                          v-model="form.postcode"
                          :state="($v.form.postcode.$dirty && $v.form.postcode.$invalid)? false : null"
                          @blur.native="$v.form.postcode.$touch()"
                          placeholder="Enter Post Code">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.postcode.required">
              Post Code is a required field
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.postcode.integer">
              Post Code can only consist of numeric characters
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.postcode.maxLength">
              Post Code can only have a maximum of 6 digits
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col md="12">
          <h4><strong>Product Application Details</strong></h4>
        </b-col>
      </b-row>
      <b-row v-if="checkSerialType == 'DURA SEAL Leather Protection' || checkSerialType == 'DURA SEAL Paint Protection' || checkSerialType == 'DURA SEAL Fabric Protection'">
        <b-col md="4">
          <b-form-group class="vehicleRegistrationNumberGroup required"
                      label="Vehicle Registration No.:"
                      label-for="vehicleRegistrationNumber">
          <b-form-input class="vehicleRegistrationNumber"
                        v-model="form.vehicle_registration"
                        :state="($v.form.vehicle_registration.$dirty && $v.form.vehicle_registration.$invalid)? false : null"
                        @blur.native="$v.form.vehicle_registration.$touch()"
                        type="text"
                        required
                        placeholder="Enter Vehicle Registration No.">
          </b-form-input>
          <b-form-invalid-feedback v-if="!form.vehicle_registration.required">
            Vehicle Registration Number is a required field
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!form.vehicle_registration.alphaNum">
            Vehicle Registration Number can only consist of alphanumeric characters
          </b-form-invalid-feedback>
        </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="Make"
                        label="Make:"
                        label-for="Make">
            <b-form-select id="Make"
                  v-model="form.vehicle_make"
                  :state="($v.form.vehicle_make.$dirty && $v.form.vehicle_make.$invalid)? false : null"
                  @blur.native="$v.form.vehicle_make.$touch()"
                  @change="getModel()"
                  :options="vehicleMakeOptions" 
                  required/>
            <b-form-invalid-feedback v-if="!form.vehicle_make.required">
              Make is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="Model"
                        label="Model:"
                        label-for="Model">
            <b-form-select id="Model"
                  v-model="form.vehicle_model"
                  :state="($v.form.vehicle_model.$dirty && $v.form.vehicle_model.$invalid)? false : null"
                  @blur.native="$v.form.vehicle_model.$touch()"
                  :options="vehicleModelOptions" 
                  required/>
            <b-form-invalid-feedback v-if="!form.vehicle_model.required">
              Model is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="checkSerialType == 'DURA SEAL Leather Protection' || checkSerialType == 'DURA SEAL Paint Protection' || checkSerialType == 'DURA SEAL Fabric Protection'">
        <b-col offset-md="4" md="4">
          <template v-if="form.vehicle_make == 'Others'">
            <b-form-group class="makeOthersGroup required">
              <b-form-input class="makeOthers"
                            v-model="form.vehicle_make_others"
                            type="text"
                            placeholder="Enter Make">
              </b-form-input>
            </b-form-group>
          </template>
        </b-col>
        <b-col md="4">
          <template v-if="form.vehicle_model == 'Others'">
            <b-form-group class="modelOthersGroup required">
              <b-form-input class="modelOthers"
                            v-model="form.vehicle_model_others"
                            type="text"
                            placeholder="Enter Model">
              </b-form-input>
            </b-form-group>
          </template>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" v-if="checkSerialType == 'Leather Guard' || checkSerialType == 'Soil Guard'">
          <b-form-group class="invoiceNumberGroup"
                        label="Invoice No.:"
                        label-for="invoiceNumber">
            <b-form-input class="invoiceNumber"
                          v-model="form.invoice_number"
                          :state="($v.form.invoice_number.$dirty && $v.form.invoice_number.$invalid)? false : null"
                          @blur.native="$v.form.invoice_number.$touch()"
                          type="text"
                          required
                          placeholder="Enter Invoice No.">
            </b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.invoice_number.alphaNum">
              Invoice Number can only consist of alphanumeric characters
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="dealerGroup"
                        class="required"
                        label="Where did you bought the product:"
                        label-for="dealerName">
            <vue-bootstrap-typeahead v-model="form.dealer_name"
                                      :data="dealerNameOptions"
                                      placeholder="Enter Dealer Name"
                                      :inputClass="($v.form.dealer_name.$dirty && $v.form.dealer_name.$invalid)? 'is-invalid' : ''"
                                      @blur.native="$v.form.dealer_name.$touch()"/>
            <b-form-invalid-feedback v-if="($v.form.dealer_name.$dirty && !$v.form.dealer_name.required)" style="display:block;">
              Dealer Name is a required field
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="4" lg="4" class="padding-bot">
          <b-button class="col-sm-12 col-md-12 col-lg-12" type="button" variant="primary" @click="saveWarrantyRegistration"><strong>REGISTER PRODUCT</strong></b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import Datepicker from "vue-bulma-datepicker";
import { validationMixin } from "vuelidate";
import { required, email, integer, maxLength, alphaNum } from 'vuelidate/lib/validators';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import TypeAhead from "vue2-typeahead";

export default{
  name: "WarrantyForm",
  components: {
      Datepicker,
      TypeAhead,
      Loading
  },
  data () {
    return {
      validated: true,
      form: {
        firstname: '',
        lastname: '',
        contact_number: '',
        email: '',
        address: '',
        suburb: '',
        region: '',
        city: '',
        country: 'New Zealand',
        postcode: '',
        product_type: '',
        serial_number: '',
        invoice_number: '',
        vehicle_registration: '',
        vehicle_make: '',
        vehicle_make_others: '',
        vehicle_model: '',
        vehicle_model_others: '',
        purchase_date: '',
        product_applied: [],
        proof_purchase: null,
        proof_purchase_size: null,
        proof_purchase_type: null,
        proof_purchase_file: null,
        multiple: false,
        options: [],
        dealer_name: '',
        dealer_location: '',
      },
      countryOptions : [
        { value: 'New Zealand', text: 'New Zealand' }
      ]
    }
  },
  mixins: [
    validationMixin
  ],
  validations: {
    form: {
      firstname: {
        required
      },
      lastname: {
        required
      },
      contact_number: {
        required
      },
      email: {
        required,
        email
      },
      address: {
        required
      },
      suburb: {},
      region: {},
      city: {
        required
      },
      country: {
        required
      },
      postcode: {
        required,
        integer,
        maxLength: maxLength(6)
      },
      product_type: {},
      serial_number: {},
      purchase_date: {},
      product_applied: {},
      invoice_number: {
        alphaNum
      },
      vehicle_registration: {
        alphaNum,
        isNeeded(value, params) {

          if( this.checkSerialType == 'DURA SEAL Leather Protection' || this.checkSerialType == 'DURA SEAL Paint Protection' || this.checkSerialType == 'DURA SEAL Fabric Protection' ){

            if( value === '' ){
              return false;
            }
          }

          return true;
        }
      },
      vehicle_make: {},
      vehicle_model: {},
      proof_purchase: {},
      dealer_name: {
        required
      },
      dealer_location: {},
    }
  },
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "warranty",
          "vehicleMakeOptions",
          "vehicleModelOptions",
          "dealerNameOptions",
          "checkType",
          "checkSerialType",
          "checkData",
          "serial_email"
      ])
  },
  created: function() {
      this.form.firstname = this.warranty.firstname;
      this.form.lastname = this.warranty.lastname;
      this.form.contact_number = this.warranty.contact_number;
      this.form.email = this.warranty.email;
      this.form.address = this.warranty.address;
      this.form.suburb = this.warranty.suburb;
      this.form.city = this.warranty.city;
      this.form.region = this.warranty.region;
      this.form.country = this.warranty.country;
      this.form.postcode = this.warranty.postcode;

      this.form.invoice_number = this.warranty.invoice_number;
      this.form.dealer_name = this.warranty.dealer_name;
      this.form.dealer_location = this.warranty.dealer_location;
      this.form.subscribe = this.warranty.subscribe;
      this.form.product_details = this.warranty.product_details;

      this.$store.dispatch("warranty/getMake");
  },
  methods: {
    getResponse: function (response) {
        return response.data.items;
    },
    setPersonal() {
      this.$store.commit("warranty/setPersonal", this.form);
      this.$store.commit("warranty/enableProduct");
    },
    getMake: function(){

      let self = this;

      this.$nextTick(function() {
        self.$store.dispatch("warranty/getMake");
      });

    },
    getModel: function(){

      let self = this;

      this.$nextTick(function() {
        let make = self.form.vehicle_make;

        self.form.vehicle_model = "";

        self.$store.commit("warranty/setMake", make);
        self.$store.commit("warranty/clearVehicleModel");
        self.$store.dispatch("warranty/getModel").then(function() {
          self.form.product_type = self.productType;

          if( make == "Others" ){
            self.form.vehicle_model = 'Others';
          }

        });
      });

    },
    saveWarrantyRegistration() {

      let productDetails = this.form.product_details;
      let arrayLength = productDetails.length;

      if( this.form.vehicle_make_others != null ){
        this.form.vehicle_make = this.form.vehicle_make_others;
      }

      if( this.form.vehicle_model_others != null ){
        this.form.vehicle_model = this.form.vehicle_model_others;
      }

      console.log(this.form);
      
      // this.$store.commit("warranty/setProduct", this.form);
      // this.$store.dispatch("warranty/saveWarranty");
    }
  }
}
</script>
