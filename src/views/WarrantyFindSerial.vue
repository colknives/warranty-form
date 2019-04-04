<template>
  <div id="warranty-find-serial">
      <b-row>
        <b-col>
          <h4><strong>Where to find your Serial</strong></h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="4">
          <img src="/images/icon/serial-img.png" class="serial-img" />
        </b-col>
        <b-col md="8" sm="8">
          <h5>Look for the SERIAL NUMBER inside your Product warranty document.</h5>
          <p>If you believe the information shown for your product is incorrect, you can <a href="#">submit your proof of purchase online.</a> Your sales receipt is needed for TF GROUP warranty. TFGROUP validation so be sure to keep it in a safe place. For more information, please contact us <a href="#">tfgroup claims support</a></p>
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
