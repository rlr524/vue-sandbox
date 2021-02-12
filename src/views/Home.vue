<template>
  <div id="home">
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
