<template>
  <div class="warranty-registration">
    <loading :active.sync="loading" 
        :is-full-page="true"></loading>
    <section class="warranty-personal-details" v-if="personal">
      <div class="warranty-image-header">
        <img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" />
      </div>
    	<div class="warranty-personal-header">
    		<h3><strong>Why register your product?</strong></h3>
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
              <b-form-group id="Region"
                            class="required"
                            label="Region:"
                            label-for="Region">
                <b-form-input id="region"
                              type="text"
                              required
                              v-model="form.region"
                              :state="($v.form.region.$dirty && $v.form.region.$invalid)? false : null"
                              @blur.native="$v.form.region.$touch()"
                              aria-describedby="input1LiveFeedback"
                              placeholder="Enter Region">
                </b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.region.required">
                  Region is a required field
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
              <b-form-group id="suburbGroup"
                            class="required"
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
              </b-form-group>
            </b-col>
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
          </b-row>
          <b-button type="button" variant="primary" @click="setPersonal"><strong>Proceed to Product Details</strong></b-button>
        </b-form>
      </div>
    </section>
    <section class="warranty-product-details" v-if="product">
      <div class="warranty-image-header">
        <img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" />
      </div>
      <div class="warranty-product-header">
        <h3><strong>Why register your product?</strong></h3>
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
            <template v-for="(productInfo, key) in $v.form.product_details.$each.$iter">
              <div class="product-detail-info-container">
                <div class="product-delete-container">
                  <b-row v-if="key != 0">
                    <b-col class="product-delete-container">
                      <a @click="deleteDetail(key)">DELETE</a>
                    </b-col>
                  </b-row>
                </div>
                <div class="product-info-container">
                  <b-row>
                    <b-col md="4">
                      <b-form-group class="serialNumberGroup required info">
                        <label for="serialNumber" class="col-form-label">Product Serial Number:</label><span class="info-tip" v-b-tooltip.hover title="Serial number is located at the rear box ex. DS123456">i</span>
                        <b-form-input class="serialNumber"
                                      v-model="form.product_details[key].serial_number"
                                      :state="(productInfo.serial_number.$dirty && productInfo.serial_number.$invalid)? false : null"
                                      @blur.native="productInfo.serial_number.$touch()"
                                      type="text"
                                      required
                                      placeholder="Enter Serial Number">
                        </b-form-input>
                        <b-form-invalid-feedback v-if="!productInfo.serial_number.required">
                          Serial Number is a required field
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col md="4">
                      <b-form-group class="productTypeGroup required"
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
                            Product Type is a required field
                          </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col md="4">
                      <b-form-group class="purchaseDateGroup required"
                                    label="Purchase Date:"
                                    label-for="purchaseDateNumber">
                              <datepicker
                                :config="dateConfig"
                                v-model="form.product_details[key].purchase_date"
                                :state="(productInfo.purchase_date.$dirty && productInfo.purchase_date.$invalid)? false : null"
                                @blur.native="productInfo.purchase_date.$touch()"
                                placeholder="DD-MM-YYYY" 
                                class="form-control datefield">
                            </datepicker>
                            <b-form-invalid-feedback v-if="!productInfo.purchase_date.required">
                            Purchase Date is a required field
                          </b-form-invalid-feedback>
                        </b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <template v-if="form.product_details[key].product_type == 'DURA SEAL Vehicle Protection'">
                    <b-row>
                    <b-col md="12">
                    <b-form-group class="productAppliedGroup required"
                                    label="Product Applied:"
                                    label-for="productApplied">
                    <b-row>
                      <template v-for="(optionValue, optionKey) in duraSealOptions">
                        <b-col md="4">
                          
                              <b-form-checkbox v-model="form.product_details[key].product_applied"
                                               :value="optionValue.value"
                                               v-bind:key="optionKey"
                                               unchecked-value="">
                                <strong>{{ optionValue.text }}</strong>
                              </b-form-checkbox>
                          
                        </b-col>
                      </template>
                    </b-row>
                    </b-form-group>
                    </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="4">
                        <b-form-group class="vehicleRegistrationNumberGroup required"
                                    label="Vehicle Registration Number:"
                                    label-for="vehicleRegistrationNumber">
                        <b-form-input class="vehicleRegistrationNumber"
                                      v-model="form.product_details[key].vehicle_registration"
                                      :state="(productInfo.vehicle_registration.$dirty && productInfo.vehicle_registration.$invalid)? false : null"
                                      @blur.native="productInfo.vehicle_registration.$touch()"
                                      type="text"
                                      required
                                      placeholder="Enter Vehicle Registration Number">
                        </b-form-input>
                        <b-form-invalid-feedback v-if="!productInfo.vehicle_registration.required">
                          Vehicle Registration Number is a required field
                        </b-form-invalid-feedback>
                      </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group id="Make"
                                      label="Make:"
                                      label-for="Make">
                          <TypeAhead
                            v-model="form.product_details[key].vehicle_make"
                            src="http://localhost:8001/vehicle-info/make/list/:keyword"
                            :getResponse="getResponse"
                            :delayTime="parseInt(500)"
                          ></TypeAhead>
                          <b-form-invalid-feedback v-if="!productInfo.vehicle_make.required">
                            Make is a required field
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group id="Model"
                                      label="Model:"
                                      label-for="Model">
                         <TypeAhead
                            v-model="form.product_details[key].vehicle_model"
                            src="http://localhost:8001/vehicle-info/model/list/:keyword"
                            :getResponse="getResponse"
                            :delayTime="parseInt(500)"
                          ></TypeAhead>
                          <b-form-invalid-feedback v-if="!productInfo.vehicle_model.required">
                            Model is a required field
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </template>
                  <b-row>
                    <b-col md="4">
                      <b-form-group class="invoiceNumberGroup"
                                    label="Invoice Number:"
                                    label-for="invoiceNumber">
                        <b-form-input class="invoiceNumber"
                                      v-model="form.product_details[key].invoice_number"
                                      :state="(productInfo.invoice_number.$dirty && productInfo.invoice_number.$invalid)? false : null"
                                      @blur.native="productInfo.invoice_number.$touch()"
                                      type="text"
                                      required
                                      placeholder="Enter Serial Number">
                        </b-form-input>
                        <b-form-invalid-feedback v-if="!productInfo.invoice_number.required">
                          Invoice Number is a required field
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col md="4">
                      <b-form-group class="proofPurchaseGroup"
                                    label="Proof of Purchase:"
                                    label-for="proofPurchase">
                          <b-form-file v-model="file[key]" 
                                      placeholder="Choose a file..."
                                      @change="setImport(key)"
                                      class="upload-file-input"
                                      accept=".jpg, .docx, .pdf"></b-form-file>
                          <small>Upload Max of 3mb. JPG, DOCX and PDF only</small>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </template>
          </div>
          <div id="product-add-container">
            <b-row>
              <b-col>
                <a id="product-details-add-btn" @click="addProduct">ADD ANOTHER</a>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row>
              <b-col md="6">
                <b-form-group id="dealerGroup"
                              class="required"
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
                    Dealer Name is a required field
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="dealerLocationGroup"
                              class="required"
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
                    Dealer Location is a required field
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
              <b-button type="button" variant="default" @click="goPersonal"><strong>Return Back</strong></b-button>
            </b-col>
            <b-col md="2">
              <b-button type="button" variant="primary" @click="saveWarrantyRegistration" :disabled="$v.form.$invalid"><strong>Submit Details</strong></b-button>
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
// import loading from 'vue-full-loading';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import TypeAhead from "vue2-typeahead";

const appliedOptionsList = {
  'Soil Guard' : [],
  'Leather Guard' : [],
  'Premium Care Leather': [],
  'Premium Care Fabric': [],
  'Premium Care Synthetic': [],
  'Premium Care Outdoor': [],
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
      TypeAhead,
      Loading
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
        region: '',
        city: '',
        country: '',
        postcode: '',
        dealer_name: '',
        dealer_location: '',
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
      regionOptions : [
        { value: 'Test Region 1', text: 'Test Region 1' },
        { value: 'Test Region 2', text: 'Test Region 2' }
      ],
      duraSealOptions : [
        { text: 'Paint Protection', value: 'Paint Protection' },
        { text: 'Leather Protection', value: 'Leather Protection' },
        { text: 'Fabric Protection', value: 'Fabric Protection' }
      ],
      vehicleMakeOptions : [
        { value: 'Test Make 1', text: 'Test Make 1' },
        { value: 'Test Make 2', text: 'Test Make 2' }
      ],
      vehicleModelOptions : [
        { value: 'Test Model 1', text: 'Test Model 1' },
        { value: 'Test Model 2', text: 'Test Model 2' }
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
      region: {
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
          product_applied: {},
          invoice_number: {},
          vehicle_registration: {},
          vehicle_make: {},
          vehicle_model: {},
          proof_purchase: {}
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
    getResponse: function (response) {
        return response.data.items;
    },
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
    },
    deleteDetail(key) {
      this.form.product_details.splice(key, 1);
    }
  }
}
</script>
