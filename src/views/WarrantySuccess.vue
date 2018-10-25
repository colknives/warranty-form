<template>
  <div id="warranty-success">
    <div class="warranty-image-header">
      <img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" />
    </div>
    <div class="warranty-success-header">
        <h3><strong>Thank you for registering your product!</strong></h3>
      </div>
      <div class="warranty-success-description">
        <p>To ensure the successful completion of this form, please ensure you are using a modern browser and enable cookies beofre proceeding.</p>
        <p>TF GROUP is committed to protecting your personal information and respecting your privacy. To understand more about the personal data we collect from our website, you can read our <a href="#">privacy information statement</a>.</p><br />
    </div>
    <div>
      <b-row>
        <b-col md="3">
          <b-button type="button" variant="default" @click="registerProduct"><strong>Register another Product</strong></b-button>
        </b-col>
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
    registerProduct() {
      this.$store.commit("warranty/enablePersonal");
      this.$store.commit("warranty/clearForm");
      this.$router.push('/');
    },
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
          "product"
      ])
  }
}
</script>
