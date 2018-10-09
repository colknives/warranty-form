<template>
  <div class="warranty-registration">
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
                              placeholder="Enter First Name">
                </b-form-input>
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
                              placeholder="Enter Last Name">
                </b-form-input>
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
                              placeholder="Enter Contact Number">
                </b-form-input>
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
                              placeholder="Enter Email">
                </b-form-input>
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
                              placeholder="Enter Address">
                </b-form-input>
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
                              placeholder="Enter Suburb">
                </b-form-input>
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
                              placeholder="Enter City">
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="postCodeGroup"
                            label="Post Code:"
                            label-for="postcode">
                <b-form-input id="postcode"
                              type="text"
                              required
                              v-model="form.postcode"
                              placeholder="Enter Post Code">
                </b-form-input>
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
      <div class="warranty-personal-form">
        <b-form>
          <b-row>
            <b-col md="12">
              <h5>Product Details</h5>
            </b-col>
          </b-row>
          <div id="product-details-container">
            <b-row>
              <b-col md="4">
                <b-form-group id="productType"
                              label="Product Type:"
                              label-for="productType">
                  <b-form-input id="productType"
                                type="text"
                                required
                                v-model="form.product_type"
                                placeholder="Enter Product Type">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="serialNumber"
                              label="Serial Number:"
                              label-for="serialNumber">
                  <b-form-input id="serialNumber"
                                type="text"
                                required
                                v-model="form.serial_number"
                                placeholder="Enter Serial Number">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="purchaseDate"
                              label="Purchase Date:"
                              label-for="purchaseDate">
                    <datepicker
                            :config="dateConfig"
                            v-model="form.purchase_date"
                            placeholder="Enter Purchase Date" 
                            class="form-control">
                        </datepicker>
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="4">
                <b-form-group class="paintProtectionGroup">
                    <b-form-checkbox class="duraSealPaint"
                                     v-model="form.dura_paint"
                                     value="DURA-SEAL Paint Protection"
                                     unchecked-value="">
                      DURA-SEAL Paint Protection
                    </b-form-checkbox>
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group class="leatherProtectionGroup">
                    <b-form-checkbox class="duraSealLeather"
                                     v-model="form.dura_leather"
                                     value="DURA-SEAL Leather Protection"
                                     unchecked-value="">
                      DURA-SEAL Leather Protection
                    </b-form-checkbox>
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group class="fabricProtectionGroup">
                    <b-form-checkbox class="duraSealFabric"
                                     v-model="form.dura_fabric"
                                     value="DURA-SEAL Fabric Protection"
                                     unchecked-value="">
                      DURA-SEAL Fabric Protection
                    </b-form-checkbox>
                  </b-form-input>
                </b-form-group>
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
                                placeholder="Enter Dealer Name">
                  </b-form-input>
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
                                placeholder="Enter Location">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <b-form-group id="subscribeGroup">
                    <b-form-checkbox id="subscribe"
                                     v-model="form.subscribe"
                                     value="Yes"
                                     unchecked-value="No">
                      I want to be notified about the latest TF GROUP products, promotion and updated drivers and software.
                    </b-form-checkbox>
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </div>
          <b-row>
            <b-col md="2">
              <b-button type="button" variant="default" @click="goPersonal">Return Back</b-button>
            </b-col>
            <b-col md="2">
              <b-button type="button" variant="primary" @click="saveWarrantyRegistration">Submit Details</b-button>
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

export default{
  name: "WarrantyRegistration",
  components: {
      Datepicker
  },
  data () {
    return {
      form: {
        firstname: '',
        lastname: '',
        contact_number: '',
        email: '',
        address: '',
        suburb: '',
        city: '',
        postcode: '',
        dealer_name: '',
        dealer_location: '',
        subscribe: '',
        product_type: '',
        serial_number: '',
        purchase_date: '',
        dura_paint: '',
        dura_leather: '',
        dura_fabric: ''
      },
      dateConfig: { 
        dateFormat: 'm-d-Y', 
        static: true 
      },
      personal: true,
      product: false
    }
  },
  computed: {
      ...mapState("warranty", [
          "loading",
          "errors",
          "notification",
          "warranty"
      ])
  },
  methods: {
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
    }
  }
}
</script>
