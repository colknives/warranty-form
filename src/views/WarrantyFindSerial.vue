<template>
  <div id="warranty-find-serial">
      <b-row>
        <b-col md="2" sm="2">
          <img src="/images/icon/serial-img.png" class="serial-img find-serial-img" />
        </b-col>
        <b-col md="10" sm="10">
          <h5><strong>Where to find your Warranty Number</strong></h5>
          <p>Your warranty number is in red print on the front page of your document.</p>
        </b-col>
      </b-row>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";

export default{
  name: "WarrantyFindSerial"
}
</script>
