<template>
  <div class="checkout"></div>
  <p>MENSAGEM!!!</p>

  <p>Valor Total R$ {{ this.$store.getters.gamePrice }}</p>
</template>

<script>
export default {
  name: "Checkout",
  components: {},
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
