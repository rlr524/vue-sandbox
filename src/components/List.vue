<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Mixins - List Component</h1>
        <label>
          <input v-model="fruitFilter" />
        </label>
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">
            {{ fruit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import fruitMixin from "@/js/fruitMixin";

export default {
  name: "FilterMixin",
  mixins: [fruitMixin],
  /**
   * @description
   * Note the Fruit Mixin (fruitMixin.js) created() hook gets run before this created() hook;
   * the component always has the last word, the mixin cannot destroy anything in the component
   * for mixins, any global mixins (should be rare and almost never used in prod apps, generally
   * for 3P plugins) will be loaded first, followed by local mixins, then the component
   */
  created() {
    console.log("Inside List Created Hook");
  },
};
</script>

<style scoped></style>
