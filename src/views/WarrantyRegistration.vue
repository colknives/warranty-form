<template>
  <div class="warranty-registration">
    <loading :show="loading" label="Loading..."></loading>
    <section class="warranty-personal-details" v-if="personal">
    	<div class="warranty-personal-header">
    		<h2>Register your product here</h2>
    	</div>
    	<div class="warranty-personal-description">
    		<p>Please complete our form to register your product for warranty</p>
    		<p>To ensure the successful completion of this form, please ensure you are using a modern browser and enable cookies before proceeding.</p>
    		<p>TF GROUP is committed to protecting your personal information and respecting your privacy. To understand more about the personal data we collect from our website, you can read our <a href="#">privacy information statement</a>.</p>
    	</div>
      <div class="warranty-personal-form">
        <b-form>
          <b-row>
            <b-col md="12">
              <h5>Personal Details</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group id="firstNameGroup"
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
                  Firstn Name is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="lastNameGroup"
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
                  Last Name is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group id="mobileGroup"
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
                  Contact Number is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="emailGroup"
                            label="Email:"
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
                  Email is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group id="addressGroup"
                            label="Address:"
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
                  Address is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="6">
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
                  Suburb is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group id="cityGroup"
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
                  City is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="Country"
                            label="Country:"
                            label-for="Country">
                <b-form-select id="Country"
                                v-model="form.country"
                                :state="($v.form.country.$dirty && $v.form.country.$invalid)? false : null"
                                @blur.native="$v.form.country.$touch()"
                                :options="countryOptions" 
                                required/>
                <b-form-invalid-feedback v-if="!$v.form.country.required">
                  Country is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group id="postCodeGroup"
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
                  Post Code is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button type="button" variant="primary" @click="setPersonal">Proceed to Product Details</b-button>
        </b-form>
      </div>
    </section>
    <section class="warranty-product-details" v-if="product">
      <div class="warranty-product-header">
        <h2>Enter your product &amp; dealer details</h2>
      </div>
      <div class="warranty-product-description">
        <p>To ensure the successful completion of this form, please ensure you are using a modern browser and enable cookies beofre proceeding.</p>
        <p>TF GROUP is committed to protecting your personal information and respecting your privacy. To understand more about the personal data we collect from our website, you can read our <a href="#">privacy information statement</a>.</p>

      </div>
      <div class="warranty-error-container">
        <b-alert variant="danger"
                 dismissible
                 :show="hasErrors"
                 @dismissed="hasErrors=false">
          <template v-if="errors" 
            v-for="(errorMsg, key) in errors">
            <p v-bind:key="key">{{ errorMsg }}</p>
          </template>
        </b-alert>
      </div>
      <div class="warranty-personal-form">
        <b-form>
          <b-row>
            <b-col md="12">
              <h5>Product Details</h5>
            </b-col>
          </b-row>
          <div id="product-details-container">
            <div class="product-info-container" v-for="(productInfo, key) in $v.form.product_details.$each.$iter">
              <b-row v-if="key != 0">
                <b-col class="product-delete-container">
                  <a @click="deleteDetail(key)">Delete</a>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="4">
                  <b-form-group class="serialNumberGroup"
                                label="Serial Number:"
                                label-for="serialNumber">
                    <b-form-input class="serialNumber"
                                  v-model="form.product_details[key].serial_number"
                                  :state="(productInfo.serial_number.$dirty && productInfo.serial_number.$invalid)? false : null"
                                  @blur.native="productInfo.serial_number.$touch()"
                                  type="text"
                                  required
                                  placeholder="Enter Serial Number">
                    </b-form-input>
                    <b-form-invalid-feedback v-if="!productInfo.serial_number.required">
                      Serial Number is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group class="productTypeGroup"
                                  label="Product Type:"
                                  label-for="productType">
                      <b-form-select id="productType"
                                  v-model="form.product_details[key].product_type"
                                  :state="(productInfo.product_type.$dirty && productInfo.product_type.$invalid)? false : null"
                                  @blur.native="productInfo.product_type.$touch()"
                                  :options="productTypeOptions" 
                                  required
                                  @change="setOptions(key)"/>
                      <b-form-invalid-feedback v-if="!productInfo.product_type.required">
                        Product Type is required
                      </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group class="purchaseDateGroup"
                                label="Purchase Date:"
                                label-for="purchaseDateNumber">
                          <datepicker
                            :config="dateConfig"
                            v-model="form.product_details[key].purchase_date"
                            :state="(productInfo.purchase_date.$dirty && productInfo.purchase_date.$invalid)? false : null"
                            @blur.native="productInfo.purchase_date.$touch()"
                            placeholder="Enter Purchase Date" 
                            class="form-control">
                        </datepicker>
                        <b-form-invalid-feedback v-if="!productInfo.purchase_date.required">
                        Purchase Date is required
                      </b-form-invalid-feedback>
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                 <template v-for="(optionValue, optionKey) in form.product_details[key].options">
                  <b-col md="4">
                    <b-form-group class="productAppliedGroup">
                        <b-form-checkbox v-model="form.product_details[key].product_applied"
                                         :value="optionValue.value"
                                          v-bind:key="optionKey"
                                          @change="checkAppliedOption(key, optionValue.value)"
                                         unchecked-value="">
                          {{ optionValue.text }}
                        </b-form-checkbox>
                    </b-form-group>
                  </b-col>
                </template>
              </b-row>
              <b-row>
                <b-col md="12">
                  <b-form-group class="proofPurchaseGroup"
                                label="Proof of Purchase:"
                                label-for="proofPurchase">
                      <b-form-file v-model="file[key]" 
                                  placeholder="Choose a file..."
                                  @change="setImport(key)"
                                  accept=".jpg, .png, .pdf"></b-form-file>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div id="product-add-container">
            <b-row>
              <b-col>
                <b-button type="button" variant="primary" @click="addProduct">Add Another Product</b-button>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row>
              <b-col md="6">
                <b-form-group id="dealerGroup"
                              label="Dealer Name:"
                              label-for="dealerName">
                  <b-form-input id="dealerName"
                                type="text"
                                required
                                v-model="form.dealer_name"
                                :state="($v.form.dealer_name.$dirty && $v.form.dealer_name.$invalid)? false : null"
                                @blur.native="$v.form.dealer_name.$touch()"
                                placeholder="Enter Dealer Name">
                  </b-form-input>
                  <b-form-invalid-feedback v-if="!$v.form.dealer_name.required">
                    Dealer Name is required
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="dealerLocationGroup"
                              label="Location:"
                              label-for="dealerLocation">
                  <b-form-input id="dealerLocation"
                                type="text"
                                required
                                v-model="form.dealer_location"
                                :state="($v.form.dealer_location.$dirty && $v.form.dealer_location.$invalid)? false : null"
                                @blur.native="$v.form.dealer_location.$touch()"
                                placeholder="Enter Location">
                  </b-form-input>
                  <b-form-invalid-feedback v-if="!$v.form.dealer_location.required">
                    Dealer Location is required
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <p>By clicking submit you are agreeing to the <a href="#">Terms and Conditions.</a></p>
              </b-col>
            </b-row>
          </div>
          <b-row>
            <b-col md="2">
              <b-button type="button" variant="default" @click="goPersonal">Return Back</b-button>
            </b-col>
            <b-col md="2">
              <b-button type="button" variant="primary" @click="saveWarrantyRegistration" :disabled="$v.form.$invalid">Submit Details</b-button>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import Datepicker from "vue-bulma-datepicker";
import { validationMixin } from "vuelidate";
import { required, minLength, between } from 'vuelidate/lib/validators';
import loading from 'vue-full-loading';

const appliedOptionsList = {
  'Soil Guard' : [
    {
      text: 'Single',
      value: 'Single'
    },
    {
      text: 'Double',
      value: 'Double'
    },
    {
      text: 'Multi',
      value: 'Multi'
    }
  ],
  'Leather Guard' : [
    {
      text: 'Single',
      value: 'Single'
    },
    {
      text: 'Double',
      value: 'Double'
    },
    {
      text: 'Multi',
      value: 'Multi'
    }
  ],
  'Premium Care Leather': [
    {
      text: 'Mini',
      value: 'Mini'
    },
    {
      text: 'Midi',
      value: 'Midi'
    },
    {
      text: 'Maxi',
      value: 'Maxi'
    }
  ],
  'Premium Care Fabric': [
    {
      text: 'Mini',
      value: 'Mini'
    },
    {
      text: 'Midi',
      value: 'Midi'
    },
    {
      text: 'Maxi',
      value: 'Maxi'
    }
  ],
  'Premium Care Synthetic': [
    {
      text: 'Mini',
      value: 'Mini'
    },
    {
      text: 'Midi',
      value: 'Midi'
    },
    {
      text: 'Maxi',
      value: 'Maxi'
    }
  ],
  'Premium Care Outdoor': [
    {
      text: 'Small',
      value: 'Small'
    },
    {
      text: 'Medium',
      value: 'Medium'
    }
  ],
  'DURA SEAL Vehicle Protection': [
    {
      text: 'Paint Protection',
      value: 'Paint Protection'
    },
    {
      text: 'Leather Protection',
      value: 'Leather Protection'
    },
    {
      text: 'Fabric Protection',
      value: 'Fabric Protection'
    }
  ],
  'DURA SEAL Leather Protection': []
};

export default{
  name: "WarrantyRegistration",
  components: {
      Datepicker,
      loading
  },
  data () {
    return {
      appliedOptionsList: appliedOptionsList,
      appliedOptions: [],
      validated: true,
      form: {
        firstname: '',
        lastname: '',
        contact_number: '',
        email: '',
        address: '',
        suburb: '',
        city: '',
        country: '',
        postcode: '',
        dealer_name: '',
        dealer_location: '',
        subscribe: '',
        product_details: [
          {
            product_type: '',
            serial_number: '',
            purchase_date: '',
            product_applied: [],
            proof_purchase: null,
            proof_purchase_type: null,
            proof_purchase_file: null,
            multiple: false,
            options: []
          }
        ]
      },
      file: [],
      dateConfig: { 
        dateFormat: 'd-m-Y', 
        static: true 
      },
      productTypeOptions : [
        { value: 'DURA SEAL Vehicle Protection', text: 'DURA SEAL Vehicle Protection' },
        { value: 'DURA SEAL Leather Protection', text: 'DURA SEAL Leather Protection' },
        { value: 'Premium Care Fabric', text: 'Premium Care Fabric' },
        { value: 'Premium Care Leather', text: 'Premium Care Leather' },
        { value: 'Premium Care Synthetic', text: 'Premium Care Synthetic' },
        { value: 'Premium Care Outdoor', text: 'Premium Care Outdoor' },
        { value: 'Soil Guard', text: 'Soil Guard' },
        { value: 'Leather Guard', text: 'Leather Guard' }
      ],
      countryOptions : [
        { value: 'New Zealand', text: 'New Zealand' },
        { value: 'Australia', text: 'Australia' }
      ],
      personal: true,
      product: false
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
        required
      },
      address: {
        required
      },
      suburb: {
        required
      },
      city: {
        required
      },
      country: {
        required
      },
      postcode: {
        required
      },
      dealer_name: {
        required
      },
      dealer_location: {
        required
      },
      product_details: {
        required,
        $each: {
          product_type: {
            required
          },
          serial_number: {
            required
          },
          purchase_date: {
            required
          },
          product_applied: {
            required
          },
          proof_purchase: {
            required
          }
        }
      }
    }
  },
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "warranty",
      ])
  },
  methods: {
    checkAppliedOption(key, value){

      let self = this;

      this.$nextTick(function() {
        if( self.form.product_details[key].multiple == false ){
          self.form.product_details[key].product_applied = value;
        }
      });
    },
    setPersonal() {
      this.$store.commit("warranty/setPersonal", this.form);

      this.personal = false;
      this.product = true;
    },
    saveWarrantyRegistration() {
      this.$store.commit("warranty/setProduct", this.form);
      this.$store.dispatch("warranty/saveWarranty");
    },
    goPersonal() {
      this.personal = true;
      this.product = false;
    },
    setOptions(key) {

      let self = this;

      //Solve delay select box value
      this.$nextTick(function() {

        let productType = self.form.product_details[key].product_type;

        self.form.product_details[key].product_applied = [];

        if( productType != '' ){
          self.form.product_details[key].options = appliedOptionsList[productType];
        }
        else{
          self.form.product_details[key].options = [];
        }

        if( productType == 'DURA SEAL Vehicle Protection' ){
          self.form.product_details[key].multiple = true;
        }
        else{
          self.form.product_details[key].multiple = false;
        }

      });
    },
    setImport(key) {
      let self = this;
      let reader = new FileReader();

      this.$nextTick(function() {
        setTimeout(function(){ 

          self.form.product_details[key].proof_purchase_type = self.file[key].type;

          reader.readAsDataURL(self.file[key]);
          reader.onload = e => {
            self.form.product_details[key].proof_purchase = e.target.result;
          };
        }, 500);
      });
    },
    addProduct() {
      this.form.product_details.push({
        product_type: '',
        serial_number: '',
        purchase_date: '',
        proof_purchase: null,
        proof_purchase_type: null,
        proof_purchase_file: null,
        product_applied: [],
        multiple: false,
        options: []
      });
    },
    deleteDetail(key) {
      this.form.product_details.splice(key, 1);
    }
  }
}
</script>
