<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterMixin",
  data: function() {
    return {
      text: "Hello, there.",
    };
  },
  //   Filters are simply functions and can be registered locally or globally (in main.js)
  //   Each filter must take in a value, as the reason it exists is to transform some data (e.g. that value)
  filters: {
    toUppercase: function(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped></style>
