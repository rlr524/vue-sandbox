<template>
  <div>
    <template v-if="shopping">
      <div>
        <img src="@/assets/madison_back.png" alt="" />
        <h1>Madison!</h1>
        <p>
          Is shopping!
        </p>
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
  data: function() {
    return {
      shopping: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
