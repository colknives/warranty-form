<template>
  <div id="warranty-check">
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
          <b-col sm="12" md="6">
            <b-form-group id="SerialEmailGroup"
                        class="required">
              <b-form-input id="serialEmail"
                            type="text"
                            required
                            v-model="form.serial_email"
                            aria-describedby="input1LiveFeedback"
                            placeholder="Enter a serial number or your email address">
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6">
              <b-button type="button" variant="primary" @click="checkInfo"><strong>Continue</strong></b-button>
          </b-col>
        </b-row>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default{
  name: "WarrantyCheck",
  components: {
      Loading
  },
  data () {
    return {
      form: {
        serial_email: ''
      }
    }
  },
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "warranty"
      ])
  },
  methods: {
    checkInfo: function (response) {
      this.$store.commit("warranty/setSerialEmail", this.form.serial_email);
      this.$store.dispatch("warranty/checkSerialEmailInfo");
    }
  }
}
</script>
