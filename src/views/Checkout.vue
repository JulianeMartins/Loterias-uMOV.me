<template>
  <div class="checkout">
    <p class="done-message">Você finalizou o jogo!</p>
    <p class="price-game">Valor Total {{ totalPrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Checkout",
  components: {},
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({ totalPrice: "gamePrice" }),
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.checkout {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .done-message {
    font-size: 30px;
    font-family: "Lobster Two", cursive;
  }
  .price-game {
    font-size: 25px;
    border: 1px solid $btn-primary;
    padding: 20px 40px;
    border-radius: 8px;
  }
}
</style>
