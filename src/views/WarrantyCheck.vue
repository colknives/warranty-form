<template>
  <div id="warranty-check">
    <b-form>
      <div class="warranty-image-header">
        <router-link to="/"><img src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" /></router-link>
      </div>
      <div class="warranty-success-header">
          <h3><strong>Enter your Warranty Number</strong></h3>
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
                            :state="( ( $v.form.serial_email.$dirty && $v.form.serial_email.$invalid ) || ( invalidSerial ) )? false : null"
                            @blur.native="$v.form.serial_email.$touch()"
                            aria-describedby="input1LiveFeedback"
                            placeholder="Enter a serial number or your email address">
              </b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.serial_email.required">
                This field is required
              </b-form-invalid-feedback>
              <div class="invalid-serial-container" v-if="invalidSerial">
                We're sorry, but the provided information isn't valid. Please check your information and try again
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6">
              <b-button type="button" variant="primary" :disabled="$v.form.$invalid" @click="checkInfo"><strong>Continue</strong></b-button>
          </b-col>
        </b-row>
      </div>
      <div id="warranty-description-container">
        <warranty-description></warranty-description>
      </div>
      <div id="warranty-find-serial-container">
        <warranty-find-serial></warranty-find-serial>
      </div>
      <div class="warranty-footer">
        <small>&copy; 2018 TFGROUP Limited Warranty Registration application. Designed and maintained by <a href="http://www.weroar.co.nz/" target="_blank">Weroar NZ</a>.</small>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";
import WarrantyDescription from "./WarrantyDescription";
import WarrantyFindSerial from "./WarrantyFindSerial";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { validationMixin } from "vuelidate";
import { required, email, integer, maxLength, alphaNum } from 'vuelidate/lib/validators';

export default{
  name: "WarrantyCheck",
  components: {
      Loading,
      "warranty-description": WarrantyDescription,
      "warranty-find-serial": WarrantyFindSerial
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
          "warranty",
          "invalidSerial"
      ])
  },
  mixins: [
    validationMixin
  ],
  validations: {
    form: {
      serial_email: {
        required
      }
    }
  },
  methods: {
    checkInfo: function (response) {
      this.$store.commit("warranty/setSerialEmail", this.form.serial_email);
      this.$store.dispatch("warranty/checkSerialEmailInfo");
    }
  }
}
</script>
