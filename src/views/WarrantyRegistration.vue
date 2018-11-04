<template>
  <div class="warranty-registration col-sm-12  col-md-10">
    <loading :active.sync="loading" 
        :is-full-page="true"></loading>
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
    <section class="warranty-personal-details" v-if="personal">
      <warranty-personal-tab></warranty-personal-tab>
    </section>
    <section class="warranty-product-details" v-if="product">
      <warranty-product-tab></warranty-product-tab>
    </section>
    <div class="warranty-footer">
      <small>&copy; 2018 TFGROUP. All prices displayed in NZD. Checkout in NZD. Designed by <a href="http://www.weroar.co.nz/" target="_blank">Weroar NZ</a>.</small>
    </div>
  </div>
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
