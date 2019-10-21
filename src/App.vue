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
  font-family: Opens Sans, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}
body {
  background-color:#FFF !important;
}
#product-details-container{
  margin: 20px 0px;
}

.warranty-main, #warranty-success, #warranty-check{
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
    padding-bottom: 20px;
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

.warranty-personal-form, .warranty-product-form{
  margin-bottom: 50px;
}

#warranty-confirm-non {
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

.info .col-form-label{
  padding-top: 0px !important;
}

.info-tip{
  padding: 0px 7px;
  border: 1px solid #000;
  border-radius: 100px;
  float: right;
  width: 20px;
  height: 20px;
  margin-bottom: 7px;
  font-size: 14px;
  font-weight: bold;
}

.warranty-footer{
  border-top: 1px solid #eee;
  padding: 10px 0px;
  margin: 20px 0px;
}

.custom-file-label{
  overflow:hidden;
}

.padding-bot{
  padding-bottom: 10px;
}

.red{
  color:#ff0000;
}

.invalid-file-feedback{
    display: block;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
}

.warranty-notification, warranty-success-header{
  padding-bottom: 20px;
}

.font-icon{
  text-align: center;
}

.font-icon-with-header{
  padding-top: 15px;
}

.font-icon svg{
  width: 40px !important;
  height: 40px;
}

.font-icon .success{
  color: #7fd41b;
}

.font-icon .info{
  color: #4991e3;
}

.invalid-serial-container{
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.confirm-padding{
  padding: 35px 0px 25px 0px;
}

.serial-img{
  width: 100%;
}

#warranty-description-container{
  padding-top: 50px;
}


#warranty-find-serial{
  padding-top: 50px;
}

.padding-15{
  padding: 15px;
}

.transform-upper{
  text-transform:uppercase;
}

.find-serial-img{
  width: 125px;
}

.warranty-image-header{
  padding-bottom: 30px;
}



@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .warranty-image-header a img{
    width: 100%;
  }
}

</style>
