<template>
  <div class="game-card">
    <h1>Loterias uMOV.me</h1>
    <ul class="grid-container">
      <li v-for="(item, index) in amount" v-bind:key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    amount: Number,
  },
};
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
