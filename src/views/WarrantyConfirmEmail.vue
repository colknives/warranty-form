<template>
  <div id="warranty-success">
    <b-form>
      <div class="warranty-image-header">
        <img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" />
      </div>
      <div class="warranty-success-header">
          <h3><strong>Check Your Service and Support Coverage</strong></h3>
        </div>
        <div class="warranty-success-description">
          <p><a href="#">{{ checkData[0].email }}</a> product registrations</p><br />
      </div>
      <div>
        <b-row>
          <b-col sm="12" md="12">

            <!-- <template v-for="( checkInfo, key ) in checkData">
              
              <div class="warranty-notification" v-if="checkInfo['']">
                <b-row>
                  <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="success" icon="check-circle" /></b-col>
                  <b-col>
                    <p><h5>Leather Guard Protection</h5>
                    <small>Covered with Leather Guard lifetime warranty. Registered last {date e.g. 12 March 2018}.</small></p>
                  </b-col>
                </b-row>
              </div>

            </template> -->

            <div class="warranty-notification">
              <b-row>
                <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="success" icon="check-circle" /></b-col>
                <b-col>
                  <p><h5>Dura-Seal Paint and Fabric Protection</h5>
                  <small>Covered with Dura-Seal lifetime warranty. Registered last {date e.g. 12 March 2018}.</small></p>
                </b-col>
              </b-row>
            </div>
            <div class="warranty-notification">
              <b-row>
                <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="success" icon="check-circle" /></b-col>
                <b-col>
                  <p><h5>Dura-Seal Leather Protection</h5>
                  <small>Covered with Dura-Seal lifetime warranty. Registered last {date e.g. 12 March 2018}.</small></p>
                </b-col>
              </b-row>
            </div>
            <div class="warranty-notification">
              <b-row>
                <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="info" icon="info-circle" /></b-col>
                <b-col>
                  <p><h5>Dura-Seal Leather Protection Needs to top up twice a year</h5>
                  <small>We will notify you via email when you might need to top up your leather protection.</small></p>
                </b-col>
              </b-row>
            </div>
            <div class="warranty-notification" v-if="checkInfo['']">
              <b-row>
                <b-col sm="1" md="1" class="font-icon font-icon-with-header"><font-awesome-icon class="success" icon="check-circle" /></b-col>
                <b-col>
                  <p><h5>Leather Guard Protection</h5>
                  <small>Covered with Leather Guard lifetime warranty. Registered last {date e.g. 12 March 2018}.</small></p>
                </b-col>
              </b-row>
            </div>
            
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="12">
            <br />
            <p>Products are registered to the email above. <router-link to="/">Check another Serial Number</router-link></p>
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
  name: "WarrantyConfirmEmail",
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "checkType",
          "checkSerialType",
          "checkData"
      ])
  },
  methods: {
    goShop() {
      window.location = 'http://tfrgoup.myshopify.com';
    }
  }
}
</script>
