<template>
  <div class="hello">
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        v-model="cardType"
        @change="onChangeGameCard($event)"
        type="radio"
        class="btn-check"
        name="cardType"
        id="btnradio1"
        autocomplete="off"
        checked
        value="SENA"
      />
      <label class="btn btn-outline-primary" for="btnradio1">Sena</label>

      <input
        @change="onChangeGameCard($event)"
        v-model="cardType"
        type="radio"
        class="btn-check"
        name="cardType"
        id="btnradio2"
        autocomplete="off"
        value="QUINA"
      />
      <label class="btn btn-outline-primary" for="btnradio2">Quina</label>
    </div>
    <game-card :amount="amountOfDozens"></game-card>
    <p>{{ $store.getters.ascendingSelectedDozens }}</p>
    <div v-if="showTotalPrice">
      <p>Valor {{ this.$store.getters.gamePrice }}</p>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button @click="goToCheckout" class="btn btn-primary" type="button">
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard";
export default {
  name: "HelloWorld",
  components: {
    GameCard,
  },
  computed: {
    amountOfDozens() {
      return this.$store.state.defaultConfig.amount_of_dozens;
    },
    showTotalPrice() {
      const selectedDozensLength = this.$store.state.selectedDozens.length;
      const minOfDozens = this.$store.state.defaultConfig.min_of_dozens;
      return selectedDozensLength >= minOfDozens;
    },
  },
  data() {
    return {
      cardType: this.$store.state.defaultConfig.name,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    onChangeGameCard({ target }) {
      switch (target.value) {
        case "SENA":
          this.changeToSena();
          break;

        default:
          this.changeToQuina();
          break;
      }
    },
    changeToQuina() {
      this.$store.dispatch("changeCardToQuina");
    },
    changeToSena() {
      this.$store.dispatch("changeCardToSena");
    },
    goToCheckout() {
      this.$router.push({ name: "Checkout" });
    },
  },
  created() {},
};
</script>

<style scoped lang="scss"></style>
