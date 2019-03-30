<template>
  <div id="warranty-confirm-non">
    <b-form>
      <div class="warranty-image-header">
        <img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" />
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
                <b-col sm="1" md="1" class="font-icon"><font-awesome-icon class="info" icon="info-circle" /></b-col>
                <b-col>
                  <p>Our record does not show any warranty under your email / serial number <strong>{{ serial_email }}</strong>
                  <br />
                  <small>If you think you have purchased our product, you can check it's serial number and apply for claim. Alternatively, please try calling our customer support centre to validate your purchase.</a>
                  <br />
                  <a href="#">Check another Serial Number</a>
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
          "warranty",
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
