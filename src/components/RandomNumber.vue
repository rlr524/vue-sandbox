<template>
  <div>
    <button @click="getRandomNumber">Generate Random Number</button>
    <div class="random-div">
      <span>{{ randomNumber }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomNumber",
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      randomNumber: 0,
    };
  },
  methods: {
    getRandomNumber() {
      this.randomNumber =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
  },
};
</script>

<style scoped>
.random-div {
  margin-top: 1rem;
}
</style>