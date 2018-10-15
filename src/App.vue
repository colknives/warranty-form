<template>
  <div id="app">
    <router-view/>
    <notifications
    group="notification"
    position="bottom right"
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

#warranty-success{
  text-align: center;
}

#warranty-success {
  width: 900px;
  margin: 100px auto;
}

.appliedOption{
  margin-right: 100px !important;
  margin-left: 20px;
}
</style>
