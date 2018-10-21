<template>
  <div id="app">
    <router-view/>
    <notifications
    group="notification"
    position="top center"
    width="325"
    animation-type="velocity"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px 0;
}
.warranty-registration {
  width: 900px;
  margin: 0 auto;
}
body {
  background-color:#f7f7f7 !important;
}
#product-details-container{
  margin: 20px 0px;
}

.product-info-container{
  background-color: #fff;
  border: 1px solid #ccc;
}

.product-info-container{
  padding: 20px;
  margin: 10px 0px;
}

#product-add-container{
  margin: 20px 0px;
}

.product-delete-container{
  text-align: right;
}

#warranty-success {
  width: 900px;
  margin: 0px auto;
}

.appliedOption{
  margin-right: 100px !important;
  margin-left: 20px;
}

.datefield{
  background-color: #fff !important;
}

#product-details-add-btn{
  color: #2364d7;
  font-weight: bold;
}

.product-detail-info-container{
  margin-bottom: 30px;
}

.required .col-form-label:before {
    content: "* ";
    color:red;
}

.info-tip{
  padding: 0px 7px;
  border: 1px solid #000;
  border-radius: 100px;
  float: right;
  width: 20px;
  height: 20px;
  margin: 7px 0px;
  font-size: 14px;
  font-weight: bold;
}

.warranty-image-header{
  padding-bottom: 30px;
}
</style>
