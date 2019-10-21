<template>
  <b-row  id="warranty-success">
    <b-col lg="2"></b-col>
    <b-col lg="8" md="12" sm="12" xs="12">
    <div class="warranty-image-header">
      <router-link to="/"><img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" /></router-link>
    </div>
    <div class="warranty-success-header">
      <b-row>
        <b-col sm="1" md="1" class="font-icon col-2">
          <img src="/images/icon/green_checl.svg" />
        </b-col>
        <b-col sm="11" md="11" class="col-10"><h3><strong>CONGRATULATIONS!</strong></h3></b-col>
      </b-row>
    </div>
    <div class="warranty-success-description">
      <br><p>Your warranty registration has been received. We will send an email to <a v-bind:href="'mailto:'+email"><strong>{{ email }}</strong></a> confirming the registration. You will also receive a confirmation letter once the registration is approved.</p></div>
    <div>
      <b-row>
        <b-col sm="12" md="12">
          <p><router-link to="/">Register another Warranty.</router-link></p>
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col md="3">
          <b-button type="button" variant="primary" @click="goShop"><strong>Go to Shop</strong></b-button>
        </b-col>
      </b-row>
    </div>
    <div id="warranty-description-container">
        <warranty-description></warranty-description>
    </div>
    <div class="warranty-footer">
      <small>&copy; 2018 TF GROUP Limited Warranty Registration application. Designed and maintained by <a href="http://www.weroar.co.nz/" target="_blank">Weroar NZ</a>.</small>
    </div>
    </b-col>
    <b-col lg="2"></b-col>
  </b-row>
</template>

<script lang="ts">

import { mapState } from "vuex";
import WarrantyDescription from "./WarrantyDescription";

export default{
  name: "WarrantySuccess",
  created: function() {
    // setTimeout(function(){ 
    //   window.location = 'http://tfrgoup.myshopify.com'; 
    // }, 5000);
  },
  components: {
      "warranty-description": WarrantyDescription
  },
  methods: {
    goShop: function(){
      window.location = 'http://tfgroup.co.nz';
    }
  },
  computed: mapState("warranty", [
      "loading",
      "hasErrors",
      "errors",
      "notification",
      "warranty",
      "personal",
      "product",
      "email"
  ])
}
</script>
