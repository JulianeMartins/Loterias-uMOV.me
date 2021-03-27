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
  },
  created() {},
};
</script>

<style scoped lang="scss"></style>
