<template>
  <div class="warranty-personal-form">
    <b-form>
      <b-row>
        <b-col md="12">
          <h5>Personal Details</h5>
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
      <b-button class="col-sm-12 col-md-6 col-lg-4" type="button" variant="primary" @click="setPersonal" :disabled="$v.form.$invalid"><strong>Proceed to Product Details</strong></b-button>
    </b-form>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email, integer, maxLength } from 'vuelidate/lib/validators';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default{
  name: "WarrantyPersonal",
  components: {
      Loading
  },
  data: function() {
       return  {
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
          postcode: ''
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
      }
    }
  },
  computed: mapState("warranty", [
    "loading",
    "hasErrors",
    "errors",
    "notification",
    "warranty"
  ]),
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
  },
  methods: {
    getResponse: function (response) {
        return response.data.items;
    },
    setPersonal: function () {
      this.$store.commit("warranty/setPersonal", this.form);
      this.$store.commit("warranty/enableProduct");
    }
  }
}
</script>
