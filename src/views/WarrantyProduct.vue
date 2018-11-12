<template>
  <div class="warranty-product-form">
    <b-form>
      <b-row>
        <b-col md="12">
          <h5>Product Details</h5>
        </b-col>
      </b-row>
      <div id="product-details-container">
        <template v-for="(productInfo, key) in $v.form.product_details.$each.$iter">
          <div class="product-detail-info-container" v-bind:key="key">
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
                    <label for="serialNumber" class="col-form-label">Product Serial No.:</label><span class="info-tip" v-b-tooltip.hover title="Serial No. is located at the rear box ex. DS123456">i</span>
                    <b-form-input class="serialNumber"
                                  v-model="form.product_details[key].serial_number"
                                  :state="(productInfo.serial_number.$dirty && productInfo.serial_number.$invalid)? false : null"
                                  @blur.native="productInfo.serial_number.$touch()"
                                  @change="checkSerial(key)"
                                  type="text"
                                  required
                                  placeholder="Enter Serial Number">
                    </b-form-input>
                    <b-form-invalid-feedback v-if="!productInfo.serial_number.required">
                      Serial Number is a required field
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback v-if="!productInfo.serial_number.alphaNum">
                      Serial Number can only consist of alphanumeric characters
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group class="productTypeGroup required"
                                  label="Product Type:"
                                  label-for="productType">
                      <b-form-input class="productType"
                                  v-model="form.product_details[key].product_type"
                                  :state="(productInfo.product_type.$dirty && productInfo.product_type.$invalid)? false : null"
                                  @blur.native="productInfo.product_type.$touch()"
                                  type="text"
                                  readonly
                                  required>
                      </b-form-input>
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
                    <b-form-invalid-feedback v-if="!productInfo.purchase_date.required">Purchase Date is a required field</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <template v-if="form.product_details[key].product_type == 'DURA SEAL Vehicle Protection'">
                <b-row>
                <b-col md="12">
                <b-form-group class="productAppliedGroup"
                                label="Product Applied:"
                                label-for="productApplied">
                <b-row>
                  <template v-for="(optionValue, optionKey) in duraSealOptions">
                    <b-col md="4" v-bind:key="optionKey">
                      
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
              </template>
              <template v-if="form.product_details[key].product_type == 'DURA SEAL Vehicle Protection' || form.product_details[key].product_type == 'DURA SEAL Leather Protection'">
                <b-row>
                  <b-col md="4">
                    <b-form-group class="vehicleRegistrationNumberGroup required"
                                label="Vehicle Registration No.:"
                                label-for="vehicleRegistrationNumber">
                    <b-form-input class="vehicleRegistrationNumber"
                                  v-model="form.product_details[key].vehicle_registration"
                                  :state="(productInfo.vehicle_registration.$dirty && productInfo.vehicle_registration.$invalid)? false : null"
                                  @blur.native="productInfo.vehicle_registration.$touch()"
                                  type="text"
                                  required
                                  placeholder="Enter Vehicle Registration No.">
                    </b-form-input>
                    <b-form-invalid-feedback v-if="!productInfo.vehicle_registration.required">
                      Vehicle Registration Number is a required field
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback v-if="!productInfo.vehicle_registration.alphaNum">
                      Vehicle Registration Number can only consist of alphanumeric characters
                    </b-form-invalid-feedback>
                  </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group id="Make"
                                  label="Make:"
                                  label-for="Make">
                      <!-- <TypeAhead
                        v-model="form.product_details[key].vehicle_make"
                        src="http://localhost:8001/vehicle-info/make/list/:keyword"
                        :getResponse="getResponse"
                        :delayTime="parseInt(500)"
                      ></TypeAhead> -->
                      <b-form-select id="Make"
                            v-model="form.product_details[key].vehicle_make"
                            :state="(productInfo.vehicle_make.$dirty && productInfo.vehicle_make.$invalid)? false : null"
                            @blur.native="productInfo.vehicle_make.$touch()"
                            @change="getModel(key)"
                            :options="vehicleMakeOptions" 
                            required/>
                      <b-form-invalid-feedback v-if="!productInfo.vehicle_make.required">
                        Make is a required field
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                  <b-col md="4">
                    <b-form-group id="Model"
                                  label="Model:"
                                  label-for="Model">
                     <!-- <TypeAhead
                        v-model="form.product_details[key].vehicle_model"
                        src="http://localhost:8001/vehicle-info/model/list/:keyword"
                        :getResponse="getResponse"
                        :delayTime="parseInt(500)"
                      ></TypeAhead> -->
                      <b-form-select id="Model"
                            v-model="form.product_details[key].vehicle_model"
                            :state="(productInfo.vehicle_model.$dirty && productInfo.vehicle_model.$invalid)? false : null"
                            @blur.native="productInfo.vehicle_model.$touch()"
                            :options="vehicleModelOptions" 
                            required/>
                      <b-form-invalid-feedback v-if="!productInfo.vehicle_model.required">
                        Model is a required field
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col offset-md="4" md="4">
                    <template v-if="form.product_details[key].vehicle_make == 'Others'">
                      <b-form-group class="makeOthersGroup required">
                        <b-form-input class="makeOthers"
                                      v-model="form.product_details[key].vehicle_make_others"
                                      type="text"
                                      placeholder="Enter Make">
                        </b-form-input>
                      </b-form-group>
                    </template>
                  </b-col>
                  <b-col md="4">
                    <template v-if="form.product_details[key].vehicle_model == 'Others'">
                      <b-form-group class="modelOthersGroup required">
                        <b-form-input class="modelOthers"
                                      v-model="form.product_details[key].vehicle_model_others"
                                      type="text"
                                      placeholder="Enter Model">
                        </b-form-input>
                      </b-form-group>
                    </template>
                  </b-col>
                </b-row>
              </template>
              <b-row>
                <b-col md="4">
                  <b-form-group class="invoiceNumberGroup"
                                label="Invoice No.:"
                                label-for="invoiceNumber">
                    <b-form-input class="invoiceNumber"
                                  v-model="form.product_details[key].invoice_number"
                                  :state="(productInfo.invoice_number.$dirty && productInfo.invoice_number.$invalid)? false : null"
                                  @blur.native="productInfo.invoice_number.$touch()"
                                  type="text"
                                  required
                                  placeholder="Enter Invoice No.">
                    </b-form-input>
                    <b-form-invalid-feedback v-if="!productInfo.invoice_number.alphaNum">
                      Invoice Number can only consist of alphanumeric characters
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col md="8" sm="12" xs="12">
                  <b-form-group class="proofPurchaseGroup"
                                label="Proof of Purchase:"
                                label-for="proofPurchase">
                      <b-form-file v-model="file[key]" 
                                  placeholder="Choose a file..."
                                  @change="setImport(key)"
                                  class="upload-file-input"
                                  :state="(productInfo.proof_purchase.$invalid)? false : null"
                                  @blur.native="productInfo.proof_purchase.$touch()"
                                  accept=".jpg, .docx, .pdf"></b-form-file>
                      <small>* A great way to save a copy of your invoice in case of a claim. Upload max of 3mb. JPG, DOC, DOCX and PDF only {{ productInfo.proof_purchase.maxFile }} {{ productInfo.proof_purchase.$dirty }} {{ productInfo.proof_purchase.$invalid }}</small>
                      <div class="invalid-file-feedback" v-if="productInfo.proof_purchase.maxFile == false">Proof of Purchase file size must be less than or equal to 3mb</div>
                      <div class="invalid-file-feedback" v-if="productInfo.proof_purchase.mimeType == false">Proof of Purchase file type can only be JPG, DOC, DOCX or PDF</div>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
          </div>
        </template>
      </div>
<!--       <div id="product-add-container">
        <b-row>
          <b-col>
            <a id="product-details-add-btn" @click="addProduct">ADD ANOTHER</a>
          </b-col>
        </b-row>
      </div> -->
      <div>
        <b-row>
          <b-col md="6">
            <b-form-group id="dealerGroup"
                          class="required"
                          label="Dealer Name:"
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
          <b-col md="6">
            <b-form-group id="dealerLocationGroup"
                          class=""
                          label="Location:"
                          label-for="dealerLocation">
              <b-form-input id="dealerLocation"
                            type="text"
                            required
                            v-model="form.dealer_location"
                            :state="($v.form.dealer_location.$dirty && $v.form.dealer_location.$invalid)? false : null"
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
            <p>By clicking submit you are agreeing to the <a href="https://tfgroup.myshopify.com/pages/terms-and-conditions/" target="_blank">Terms and Conditions.</a></p>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="5" sm="6" lg="3" class="padding-bot">
          <b-button class="col-sm-12 col-md-12 col-lg-12" type="button" variant="default" @click="goPersonal"><strong>Return Back</strong></b-button>
        </b-col>
        <b-col md="5" sm="6" lg="3" class="padding-bot">
          <b-button class="col-sm-12 col-md-12 col-lg-12" type="button" variant="primary" @click="saveWarrantyRegistration" :disabled="$v.form.$invalid"><strong>Submit Details</strong></b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import Datepicker from "vue-bulma-datepicker";
import { validationMixin } from "vuelidate";
import { required, alphaNum } from 'vuelidate/lib/validators';
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

const mimeType = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword'
];

export default{
  name: "WarrantyProduct",
  components: {
      Datepicker,
      TypeAhead,
      Loading
  },
  data () {
    return {
      appliedOptionsList: appliedOptionsList,
      appliedOptions: [],
      dealerNames: ['Canada', 'USA', 'Mexico'],
      validated: true,
      form: {
        dealer_name: '',
        dealer_location: '',
        product_details: [
          {
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
      duraSealOptions : [
        { text: 'Paint Protection', value: 'Paint Protection' },
        { text: 'Leather Protection', value: 'Leather Protection' },
        { text: 'Fabric Protection', value: 'Fabric Protection' }
      ]
    }
  },
  mixins: [
    validationMixin
  ],
  validations: {
    form: {
      dealer_name: {
        required
      },
      dealer_location: {},
      product_details: {
        required,
        $each: {
          product_type: {
            required
          },
          serial_number: {
            required,
            alphaNum
          },
          purchase_date: {
            required
          },
          product_applied: {},
          invoice_number: {
            alphaNum
          },
          vehicle_registration: {
            alphaNum,
            isNeeded(value, params) {

              if( params['product_type'] == 'DURA SEAL Leather Protection' || params['product_type'] == 'DURA SEAL Vehicle Protection' ){

                if( value === '' ){
                  return false;
                }
              }

              return true;
            }
          },
          vehicle_make: {},
          vehicle_model: {},
          proof_purchase: {
            maxFile(value, params) {

              if( params['proof_purchase_size'] == null ){
                return true;
              }

              return (params['proof_purchase_size'] > 300000)? false : true;
            },
            mimeType(value, params) {

              if( params['proof_purchase_type'] == null ){
                return true;
              }

              return (!mimeType.includes(params['proof_purchase_type']))? false : true;
            }
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
          "productType",
          "serialKey",
          "vehicleMakeOptions",
          "vehicleModelOptions",
          "dealerNameOptions"
      ])
  },
  created: function() {
      this.form.invoice_number = this.warranty.invoice_number;
      this.form.dealer_name = this.warranty.dealer_name;
      this.form.dealer_location = this.warranty.dealer_location;
      this.form.subscribe = this.warranty.subscribe;
      this.form.product_details = this.warranty.product_details;

      this.$store.dispatch("warranty/getMake");
  },
  watch: {
      'form.dealer_name' : function() {
        if( this.form.dealer_name != null ){
          this.$v.form.dealer_name.$touch();
        }  
      },
      'form.dealer_location' : function() {
        if( this.form.dealer_location != null ){
          this.$v.form.dealer_location.$touch();
        }  
      }
  },
  methods: {
    getResponse: function (response) {
        return response.data.items;
    },
    getMake: function(){

      let self = this;

      this.$nextTick(function() {
        self.$store.dispatch("warranty/getMake");
      });

    },
    getModel: function(key){

      let self = this;

      this.$nextTick(function() {
        let make = self.form.product_details[key].vehicle_make;

        self.form.product_details[key].vehicle_model = "";

        self.$store.commit("warranty/setMake", make);
        self.$store.commit("warranty/clearVehicleModel");
        self.$store.dispatch("warranty/getModel").then(function() {
          self.form.product_details[self.serialKey].product_type = self.productType;

          if( make == "Others" ){
            self.form.product_details[key].vehicle_model = 'Others';
          }

        });
      });

    },
    checkSerial: function (key) {

      let self = this;

      this.$nextTick(function() {
        let serial = self.form.product_details[key].serial_number;
        self.form.product_details[key].product_type = "";

        self.$store.commit("warranty/setSerial", serial);
        self.$store.commit("warranty/clearProductType");
        self.$store.commit("warranty/setSerialKey", key);
        self.$store.dispatch("warranty/identifySerial").then(function() {
          self.form.product_details[self.serialKey].product_type = self.productType;

          let type = 'Furniture';

          if( self.productType == 'DURA SEAL Leather Protection' || self.productType == 'DURA SEAL Vehicle Protection' ){
            type = 'Vehicle';
          }

          self.$store.commit("warranty/setDealerType", type);
          self.$store.dispatch("warranty/getDealer");
        });
      });
    }, 
    checkAppliedOption(key, value){

      let self = this;

      this.$nextTick(function() {
        if( self.form.product_details[key].multiple == false ){
          self.form.product_details[key].product_applied = value;
        }
      });
    },
    saveWarrantyRegistration() {

      let productDetails = this.form.product_details;
      let arrayLength = productDetails.length;

      for (var key = 0; key < arrayLength; key++) {

        if( this.form.product_details[key].vehicle_make_others != null ){
          this.form.product_details[key].vehicle_make = this.form.product_details[key].vehicle_make_others;
        }

        if( this.form.product_details[key].vehicle_model_others != null ){
          this.form.product_details[key].vehicle_model = this.form.product_details[key].vehicle_model_others;
        }
      }

      this.$store.commit("warranty/setProduct", this.form);
      this.$store.dispatch("warranty/saveWarranty");
    },
    goPersonal() {
      this.$store.commit("warranty/enablePersonal");
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

          if( self.file[key] != null ){

            self.form.product_details[key].proof_purchase_type = self.file[key].type;
            self.form.product_details[key].proof_purchase_size = self.file[key].size;

            reader.readAsDataURL(self.file[key]);
            reader.onload = e => {
              self.form.product_details[key].proof_purchase = e.target.result;
            };

          }
          else{
            self.form.product_details[key].proof_purchase_type = null;
            self.form.product_details[key].proof_purchase_size = null;
            self.form.product_details[key].proof_purchase = null;
          }
          
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
