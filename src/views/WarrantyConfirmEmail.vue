<template>
  <div id="warranty-success">
    <b-form>
      <div class="warranty-image-header">
        <router-link to="/"><img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" /></router-link>
      </div>
<!--       <div class="warranty-success-header">
          <h3><strong>Check Your Service and Support Coverage</strong></h3>
        </div>
        <div class="warranty-success-description">
          <p><a href="#">{{ serial_email }}</a> product registrations</p><br />
      </div> -->
      <div>
        <b-row>
          <b-col sm="12" md="12">
            <div class="warranty-notification">
              <b-row>
                <b-col sm="1" md="1" class="font-icon col-2">
                  <img src="/images/icon/blue_checl.svg" />
                </b-col>
                <b-col>
                  <h5>The email you have entered has already registered a warranty number.</h5>
                  <p><router-link to="/">Please click here to register another warranty number.</router-link></p>
                </b-col>
              </b-row>
            </div>
            <!-- <template v-if="testAccount == 1">
              <div class="warranty-notification">
                <b-row>
                  <b-col sm="1" md="1" class="font-icon font-icon-with-header col-2">
                    <img src="/images/icon/yellow_checl.svg" />
                  </b-col>
                  <b-col>
                    <p><h5>Your email <a href="#">{{ serial_email }}</a> was used for test account.</h5>
                    <small>It appears that you were part of our test respondents. You may ask the admin to delete your record if you wish to delete this notification from your address.</small></p>
                  </b-col>
                </b-row>
              </div>
            </template>
            <template v-for="( checkInfo, key ) in checkData">
              <template v-if="checkInfo['Product Type'] == 'Leather Guard' || checkInfo['Product Type'] == 'Soil Guard'">
                <div class="warranty-notification">
                  <b-row>
                    <b-col sm="1" md="1" class="font-icon font-icon-with-header col-2">
                      <img src="/images/icon/green_checl.svg" />
                    </b-col>
                    <b-col>
                      <p><h5>{{ checkInfo['Product Type'] }} Protection</h5>
                      <small>Covered with {{ checkInfo['Product Type'] }} 5 year warranty. Registered last {{ checkInfo['created_at'] }}.</small></p>
                    </b-col>
                  </b-row>
                </div>
              </template>
              <template v-if="checkInfo['Product Type'] == 'DURA SEAL Paint Protection' || checkInfo['Product Type'] == 'DURA SEAL Leather Protection' || checkInfo['Product Type'] == 'DURA SEAL Fabric Protection'">
                <div class="warranty-notification">
                  <b-row>
                    <b-col sm="1" md="1" class="font-icon font-icon-with-header col-2">
                      <img src="/images/icon/green_checl.svg" />
                    </b-col>
                    <b-col>
                      <p>
                      <template v-if="checkInfo['product_applied'] == 'Fabric Protection'">
                        <template v-if="checkInfo['Product Type'] == 'DURA SEAL Paint Protection'">
                          <h5>Dura-Seal Paint and Fabric Protection</h5>
                        </template>
                        <template v-if="checkInfo['Product Type'] == 'DURA SEAL Leather Protection'">
                          <h5>Dura-Seal Leather and Fabric Protection</h5>
                        </template>                        
                      </template>
                      <template v-if="checkInfo['product_applied'] == '' || checkInfo['product_applied'] == null">
                        <template v-if="checkInfo['Product Type'] == 'DURA SEAL Paint Protection'">
                          <h5>Dura-Seal Paint Protection</h5>
                        </template>
                        <template v-if="checkInfo['Product Type'] == 'DURA SEAL Leather Protection'">
                          <h5>Dura-Seal Leather Protection</h5>
                        </template>    
                        <template v-if="checkInfo['Product Type'] == 'DURA SEAL Fabric Protection'">
                          <h5>Dura-Seal Fabric Protection</h5>
                        </template>                      
                      </template>
                      <small>Covered with Dura-Seal lifetime warranty. Registered last {{ checkInfo['created_at'] }}.</small></p>
                    </b-col>
                  </b-row>
                </div>
                <template v-if="checkInfo['Product Type'] == 'DURA SEAL Leather Protection'">
                  <div class="warranty-notification">
                    <b-row>
                      <b-col sm="1" md="1" class="font-icon font-icon-with-header col-2">
                        <img src="/images/icon/blue_checl.svg" />
                      </b-col>
                      <b-col>
                        <p><h5>Dura-Seal Leather Protection Needs to top up twice a year</h5>
                        <small>We will notify you via email when you might need to top up your leather protection.</small></p>
                      </b-col>
                    </b-row>
                  </div>
                </template>
              </template>
              <template v-if="checkInfo['Product Type'] == 'Premium Care Synthetic' || checkInfo['Product Type'] == 'Premium Care Leather' || checkInfo['Product Type'] == 'Premium Care Outdoor' || checkInfo['Product Type'] == 'Premium Care Fabric'">
                <div class="warranty-notification">
                  <b-row>
                    <b-col sm="1" md="1" class="font-icon font-icon-with-header col-2">
                      <img src="/images/icon/green_checl.svg" />
                    </b-col>
                    <b-col>
                      <p><h5>{{ checkInfo['Product Type'] }} Protection</h5>
                      <small>Covered with Premium Care 5 year warranty. Registered last {{ checkInfo['created_at'] }}.</small></p>
                    </b-col>
                  </b-row>
                </div>
              </template>
            </template> -->
          </b-col>
        </b-row>
<!--         <b-row>
          <b-col sm="12" md="12">
            <br />
            <p>Products are registered to the email above. <router-link to="/">Register another Warranty.</router-link></p>
          </b-col>
        </b-row> -->
        <b-row>
          <b-col sm="12" md="12">
              <b-button type="button" variant="primary" @click="goShop"><strong>GO TO SHOP</strong></b-button>
          </b-col>
        </b-row>
      </div>
      <div id="warranty-description-container">
        <warranty-description></warranty-description>
      </div>
      <div class="warranty-footer">
        <small>&copy; 2018 TF GROUP Limited Warranty Registration application. Designed and maintained by <a href="http://www.weroar.co.nz/" target="_blank">Weroar NZ</a>.</small>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import WarrantyDescription from "./WarrantyDescription";
import WarrantyFindSerial from "./WarrantyFindSerial";

export default{
  name: "WarrantyConfirmEmail",
  components: {
      "warranty-description": WarrantyDescription,
      "warranty-find-serial": WarrantyFindSerial
  },
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "checkType",
          "checkSerialType",
          "checkSerialEmail",
          "checkData",
          "serial_email",
          "testAccount"
      ])
  },
  methods: {
    goShop() {
      window.location = 'http://tfrgoup.myshopify.com';
    }
  }
}
</script>
