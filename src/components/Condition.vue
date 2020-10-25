<template>
  <div>
    <template v-if="bad">
      <div>
        <img src="@/assets/IMG_1080.JPG" alt="" />
        <h1>Madison has been bad and needs a spanking!</h1>
        <p>
          Put her over your knee, bare her sweet little bottom and redden it.
        </p>
      </div>
    </template>
    <template v-else>
      <div>
        <img
          src="@/assets/E961C2BD-DB3E-4D60-8E31-F4BF731A6470-7864-00000E52EF996B65.JPG"
          alt=""
        />
        <h1>Madison has been a good girl!</h1>
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
      bad: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
