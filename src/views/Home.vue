<template>
  <div class="home">
    <img src="@/assets/logo.png" alt="" />
    <Condition />
  </div>
</template>

<script>
// @ is an alias to /src
import Condition from "@/components/Condition.vue";

export default {
  name: "Home",
  components: {
    Condition,
  },
};
</script>
