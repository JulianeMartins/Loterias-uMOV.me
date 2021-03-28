<template>
  <div class="home">
    <div
      class="pb-3 d-block w-100 btn-group u-btn-group"
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
      <label class="btn" for="btnradio1">Sena</label>

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
      <label class="btn" for="btnradio2">Quina</label>
    </div>
    <game-card :amount="amountOfDozens"></game-card>

    <p class="py-3">
      <span v-if="!this.$store.getters.selectedDozensLength"
        >Você ainda não marcou nenhuma dezena!</span
      >
      <span v-else
        >Você Jogou as seguintes dezenas:
        {{ $store.getters.ascendingSelectedDozens }}
      </span>
    </p>

    <div v-if="showTotalPrice">
      <p>Valor {{ this.$store.getters.gamePrice }}</p>
      <div class="d-flex justify-content-center">
        <button @click="goToCheckout" class="btn u-btn" type="button">
          Confirmar Jogo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard";
export default {
  name: "Home",
  components: {
    GameCard,
  },
  computed: {
    amountOfDozens() {
      return this.$store.state.defaultConfig.amount_of_dozens;
    },
    showTotalPrice() {
      const selectedDozensLength = this.$store.getters.selectedDozensLength;
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
};
</script>

<style scoped lang="scss"></style>
