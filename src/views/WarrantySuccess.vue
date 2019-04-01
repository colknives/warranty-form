<template>
  <div id="warranty-success">
    <div class="warranty-image-header">
      <router-link to="/"><img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" /></router-link>
    </div>
    <div class="warranty-success-header">
      <b-row>
        <b-col sm="1" md="1" class="font-icon">
          <img src="/images/icon/green_checl.svg" />
        </b-col>
        <b-col sm="11" md="11"><h3><strong>Your Product has been registered!</strong></h3></b-col>
      </b-row>
    </div>
    <div class="warranty-success-description">
        <br />
        <p>Once approved, we will send you a general warranty terms & conditions at <a href="#">{{ email }}</a>.</p>
    </div>
    <div>
      <b-row>
        <b-col sm="12" md="12">
          <p><router-link to="/">Check another Serial Number</router-link></p>
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
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";

export default{
  name: "WarrantySuccess",
  created: function() {
    // setTimeout(function(){ 
    //   window.location = 'http://tfrgoup.myshopify.com'; 
    // }, 5000);
  },
  methods: {
    goShop() {
      window.location = 'http://tfrgoup.myshopify.com';
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
          "product",
          "email"
      ])
  }
}
</script>
