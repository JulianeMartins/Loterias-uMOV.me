<template>
  <div class="hello">
    <game-card :amount="60"></game-card>
  </div>
</template>

<script>
import GameCard from "../components/GameCard";
export default {
  name: "HelloWorld",
  components: {
    GameCard,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
