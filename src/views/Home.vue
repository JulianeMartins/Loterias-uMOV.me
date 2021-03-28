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
        :value="TYPE_SENA"
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
        :value="TYPE_QUINA"
      />
      <label class="btn" for="btnradio2">Quina</label>
    </div>
    <game-card :amount="amountOfDozens"></game-card>

    <p class="py-3">
      <span v-if="!selectedDozensLength"
        >Você ainda não marcou nenhuma dezena!</span
      >
      <span v-else
        >Você Jogou as seguintes dezenas:
        {{ ascendingSelectedDozens }}
      </span>
    </p>

    <div v-if="showTotalPrice">
      <p>Valor {{ gamePrice }}</p>
      <div class="d-flex justify-content-center">
        <button @click="goToCheckout" class="btn u-btn" type="button">
          Confirmar Jogo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { TYPE_SENA, TYPE_QUINA } from "../consts";
import GameCard from "../components/GameCard";
export default {
  name: "Home",
  components: {
    GameCard,
  },
  computed: {
    ...mapGetters([
      "selectedDozensLength",
      "ascendingSelectedDozens",
      "gamePrice",
    ]),
    ...mapState(["defaultConfig"]),
    amountOfDozens() {
      return this.defaultConfig.amount_of_dozens;
    },
    showTotalPrice() {
      const selectedDozensLength = this.selectedDozensLength;
      const minOfDozens = this.defaultConfig.min_of_dozens;
      return selectedDozensLength >= minOfDozens;
    },
    cardType() {
      return this.defaultConfig.name;
    },
  },
  data() {
    return {
      TYPE_SENA: TYPE_SENA,
      TYPE_QUINA: TYPE_QUINA,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    ...mapActions(["changeCardToQuina", "changeCardToSena"]),
    onChangeGameCard({ target }) {
      switch (target.value) {
        case TYPE_SENA:
          this.changeCardToSena();
          break;

        default:
          this.changeCardToQuina();
          break;
      }
    },
    goToCheckout() {
      this.$router.push({ name: "Checkout" });
    },
  },
};
</script>

<style scoped lang="scss"></style>
