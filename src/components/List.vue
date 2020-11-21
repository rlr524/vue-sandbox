<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Mixins</h1>
        <label>
          <input v-model="fruitFilter">
        </label>
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index"> {{ fruit }}</li>
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
      fruits: ["Apple", "Banana", "Orange", "Mango", "Melon", "Lemon", "Lime", "Pineapple"],
      fruitFilter: "",
    };
  },
  // We use a computed property here to drive our fruits filter input because it only recalculates when
  // fruitFilter changes or the fruits array changes, which makes it more performant that using a filter as
  // filters will run every time the DOM is updated (just like methods); the main purpose for a filter is to format text, e.g. format
  // dates, change case, etc.
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
