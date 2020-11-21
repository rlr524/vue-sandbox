<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <p>{{ otherText | toLowercase | toUppercase }}</p>
        <hr>
        <label>
          <input v-model="fruitFilter">
        </label>
        <ul>
          <li v-for="(fruit, index) in fruits" :key="index"> {{ fruit }}</li>
        </ul>
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
      otherText: "Madison is Cute",
      fruits: ["Apple", "Banana", "Orange", "Mango", "Melon", "Lemon", "Lime", "Pineapple"],
      fruitFilter: "",
    };
  },
  //   Filters are simply functions and can be registered locally or globally (in main.js)
  //   Each filter must take in a value, as the reason it exists is to transform some data (e.g. that value)
  filters: {
    toUppercase: function(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    filteredFruits: function() {
      return this.fruits.filter((element) => {
        return element.match(this.fruitFilter);
      })
    }
  }
};
</script>

<style scoped></style>
