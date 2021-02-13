<template>
  <div class="text-center">
    <button type="submit" class="btn btn-primary" @click="changeImage">
      Change Madison
    </button>
    <template v-if="shopping">
      <div>
        <img src="@/assets/madison_back.png" class="img-fluid" alt="" />
        <h1>Madison!</h1>
        <p>Is shopping!</p>
      </div>
    </template>
    <template v-else>
      <div>
        <img src="@/assets/madison_sitting.jpg" alt="" />
        <h1>Madison!</h1>
        <p>Get her some ice cream!</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Condition",
  data() {
    return {
      shopping: false,
    };
  },
  methods: {
    changeImage() {
      this.shopping === true ? (this.shopping = false) : (this.shopping = true);
    },
  },
};
</script>

<style scoped>
.btn {
  margin-bottom: 1%;
}
</style>
