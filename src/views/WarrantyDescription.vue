<template>
  <div id="warranty-description">
    <!--description-->
    <h4><strong>Why register your product?</strong></h4>
    <p>
      In order to properly register your product, you will need to provide your personal information and product details. The serial number is printed on the registration card and can also be found in the top section of your warranty certificate. Required fields are tag with <span class="red">*</span> on its label.</p>
    <p>Benefits of registering your product:</p>

    <ul>
      <li>Confirmation of Warranty</li>
      <li>Receive important updates for products</li>
      <li>Faster Service in the event of a claim</li>
      <li>Copy of your warranty and care instructions</li>
    </ul>
  </div>
</template>

<script lang="ts">

import { mapState } from "vuex";

export default{
  name: "WarrantyDescription"
}
</script>
