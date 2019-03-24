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
          <p>Review your warranty status and eligibility.</p><br />
      </div>
      <div>
        <b-row>
          <b-col sm="12" md="12">
            <div>
              <b-row>
                <b-col sm="2" md="2">check-icon</b-col>
                <b-col>
                  <p>Your Warranty number {warranty-number} is already registered to {email-address}
                  <br />
                  <small>Your Product is covered with a lifetime warranty. <a href="#">Check another Serial Number</a></small></p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="12">
              <b-button type="button" variant="primary"><strong>GO TO SHOP</strong></b-button>
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
  name: "WarrantyConfirmSerial"
}
</script>
