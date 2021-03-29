<template>
  <div class="home">
    <toggle :options="options" @change="onChangeGameCard"></toggle>
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
import Toggle from "../components/Toggle";
export default {
  name: "Home",
  components: {
    GameCard,
    Toggle,
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
      options: [
        {
          label: "Sena",
          value: TYPE_SENA,
        },
        {
          label: "Quina",
          value: TYPE_QUINA,
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    ...mapActions(["changeCardToQuina", "changeCardToSena"]),
    onChangeGameCard(value) {
      switch (value) {
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
