<template>
  <b-row class="warranty-main">
    <b-col lg="2"></b-col>
    <b-col lg="8" md="12" sm="12" xs="12">
      <loading :active.sync="loading" 
        :is-full-page="true"></loading>
      <div class="warranty-registration">
        <b-row>
          <b-col>
            <!--logo-->
            <router-link to="/"><img class="img-responsive" src="https://cdn.shopify.com/s/files/1/2711/9576/files/TF-Group-Logo-500-08082018_1728x.png" /></router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <warranty-form></warranty-form>
          </b-col>
        </b-row>
        <b-row>
          <warranty-description></warranty-description>
        </b-row>
        <div class="warranty-footer">
          <small>&copy; 2018 TFGROUP Limited Warranty Registration application. Designed and maintained by <a href="http://www.weroar.co.nz/" target="_blank">Weroar NZ</a>.</small>
        </div>
      </div>
    </b-col>
    <b-col lg="2"></b-col>
  </b-row>
</template>

<script lang="ts">

import { mapState } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import WarrantyDescription from "./WarrantyDescription";
import WarrantyForm from "./WarrantyForm";

export default{
  name: "WarrantyRegistration",
  components: {
    "warranty-description": WarrantyDescription,
    "warranty-form": WarrantyForm,
    Loading
  },
  data () {
    return {
    }
  },
  computed: {
      ...mapState("warranty", [
          "loading",
          "hasErrors",
          "errors",
          "notification",
          "warranty",
          "personal",
          "product"
      ])
  }
}
</script>
