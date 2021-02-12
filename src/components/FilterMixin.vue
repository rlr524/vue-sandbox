<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>Filters and Computed Properties</h1>
          <p>{{ text | toUppercase | toLowercase }}</p>
          <p>{{ otherText | toLowercase | toUppercase }}</p>
          <hr />
          <label>
            <input v-model="fruitFilter" />
          </label>
          <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">
              {{ fruit }}
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
    <app-list></app-list>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import fruitMixin from "@/js/fruitMixin";

export default {
  name: "FilterMixin",
  components: {
    appList: List,
  },
  data: function () {
    return {
      text: "Madison is so cute.",
      otherText: "The cutest!",
    };
  },
  //   Filters are simply functions and can be registered locally or globally (in main.js)
  //   Each filter must take in a value, as the reason it exists is to transform some data (e.g. that value)
  filters: {
    toUppercase: function (value) {
      return value.toUpperCase();
    },
  },
  mixins: [fruitMixin],
};
</script>

<style scoped></style>
