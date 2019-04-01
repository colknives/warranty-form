<template>
  <div id="warranty-success">
    <b-form>
      <div class="warranty-image-header">
        <router-link to="/"><img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" /></router-link>
      </div>
      <div class="warranty-success-header">
          <h3><strong>Check Your Service and Support Coverage</strong></h3>
        </div>
        <div class="warranty-success-description">
          <p>Review your warranty status and eligibility.</p><br />
      </div>
      <div>
        <b-row>
          <b-col sm="12" md="12">
            <div class="warranty-notification">
              <b-row>
                <b-col sm="2" md="2" class="font-icon">
                  <img src="/images/icon/blue_checl.svg" />
                </b-col>
                <b-col>
                  <p>Our record does not show any warranty under your email <a href="#">{{ serial_email }}</a>
                  <br />
                  <small>If you think you have purchased our product, you can check it's serial number and apply for claim. Alternatively, please try calling our customer support centre to validate your purchase.</a>
                  <br />
                  <router-link to="/">Check another Serial Number</router-link>
                  </small></p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="12">
              <b-button type="button" variant="primary" @click="goShop"><strong>GO TO SHOP</strong></b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="12">
            <br />
            <p><a href="#">Where to find your Serial number</a></p>
          </b-col>
        </b-row>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";

export default{
  name: "WarrantyConfirmNonEmail",
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "checkType",
          "checkSerialType",
          "checkData",
          "serial_email"
      ])
  },
  methods: {
    goShop() {
      window.location = 'http://tfrgoup.myshopify.com';
    }
  }
}
</script>
