<template>
  <div id="warranty-success">
    <div>
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
                  <b-col sm="2" md="2" class="font-icon col-2">
                    <img src="/images/icon/blue_checl.svg" />
                  </b-col>
                  <b-col>
                    <p>Our record does not show any warranty under your serial {serial-address}
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
    <div id="warranty-find-serial-container">
      <warranty-find-serial></warranty-find-serial>
    </div>
    <div id="warranty-description-container">
      <warranty-description></warranty-description>
    </div>
    <div class="warranty-footer">
        <small>&copy; 2018 TF GROUP Limited Warranty Registration application. Designed and maintained by <a href="http://www.weroar.co.nz/" target="_blank">Weroar NZ</a>.</small>
      </div>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import WarrantyDescription from "./WarrantyDescription";
import WarrantyFindSerial from "./WarrantyFindSerial";

export default{
  name: "WarrantyConfirmNonEmail",
  components: {
      "warranty-description": WarrantyDescription,
      "warranty-find-serial": WarrantyFindSerial
  },
  methods: {
    goShop() {
      window.location = 'http://tfrgoup.myshopify.com';
    }
  }
}
</script>
