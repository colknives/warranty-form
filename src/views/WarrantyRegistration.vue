<template>
  <b-row class="warranty-main">
    <b-col md="2"></b-col>
    <b-col md="8" sm="12" xs="12">
      <loading :active.sync="loading" 
        :is-full-page="true"></loading>
      <div class="warranty-registration">

        <b-row>
          <b-col>
            <!--logo-->
            <img class="img-responsive" src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" />
            <!--description-->
            <h3>Why register your product?</h3>
            <p>
              In order to properly register your product, you will need to provide your personal information and product details. The serial number is printed on the registration card and can also be found in the top section of your warranty certificate. Required fields are tag with <span class="red">*</span> on its label.</p>
            <p>Benefits of registering your product:</p>

              <ul>
                <li>Confirmation of ownership</li>
              <li>Receive important updates for products</li>
              <li>Be the first to know about new products and new offers</li>
              <li>Covers your warranty</li>
              </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <section class="warranty-personal-details" v-if="personal">
              <warranty-personal-tab></warranty-personal-tab>
            </section>
            <section class="warranty-product-details" v-if="product">
              <warranty-product-tab></warranty-product-tab>
            </section>
          </b-col>
        </b-row>
        <div class="warranty-footer">
          <small>&copy; 2018 TFGROUP Limited Warranty Registration application. Designed and maintained by <a href="http://www.weroar.co.nz/" target="_blank">Weroar NZ</a>.</small>
        </div>
      </div>
    </b-col>
    <b-col md="2"></b-col>
  </b-row>
</template>

<script lang="ts">

import { mapState } from "vuex";
import Datepicker from "vue-bulma-datepicker";
import { validationMixin } from "vuelidate";
import { required, minLength, between } from 'vuelidate/lib/validators';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import TypeAhead from "vue2-typeahead";
import WarrantyPersonal from "./WarrantyPersonal";
import WarrantyProduct from "./WarrantyProduct";

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
    "warranty-personal-tab": WarrantyPersonal,
    "warranty-product-tab": WarrantyProduct,
    Loading
  },
  data () {
    return {
    }
  },
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "warranty",
          "personal",
          "product"
      ])
  }
}
</script>
