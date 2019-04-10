<template>
  <div id="warranty-success">
    <div>
      <b-form>
        <div class="warranty-image-header">
          <router-link to="/"><img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" /></router-link>
        </div>
        <div>
          <b-row>
            <b-col sm="12" md="12">
              <!-- <div class="warranty-notification">
                <b-row>
                  <b-col sm="1" md="1" class="font-icon col-2">
                    <img src="/images/icon/green_checl.svg" />
                  </b-col>
                  <b-col>
                    <p>Your Warranty number {{ serial_email }} is already registered to <a href="#">{{ checkData[0].Email }}</a>
                    <br />
                    <small>Your Product is covered with a lifetime warranty. <router-link to="/">Register another Warranty.</router-link></small></p>
                  </b-col>
                </b-row>
              </div> -->
              <div class="warranty-notification">
                <b-row>
                  <b-col sm="1" md="1" class="font-icon col-2">
                    <img src="/images/icon/blue_checl.svg" />
                  </b-col>
                  <b-col>
                    <h5>The warranty number you have entered is already registered or invalid.</h5>
                    <p><router-link to="/">Please register another warranty number.</router-link></p>
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
        </div>
      </b-form>
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
  name: "WarrantyConfirmSerial",
  components: {
      "warranty-description": WarrantyDescription,
      "warranty-find-serial": WarrantyFindSerial
  },
  computed: mapState("warranty", [
      "loading",
      "hasErrors",
      "errors",
      "notification",
      "checkType",
      "checkSerialType",
      "checkData",
      "serial_email"
  ]),
  methods: {
    goShop: function() {
      window.location = 'http://tfrgoup.myshopify.com';
    }
  }
}
</script>
