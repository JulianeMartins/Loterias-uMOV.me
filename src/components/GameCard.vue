<template>
  <div class="game-card">
    <h1>Loterias uMOV.me</h1>
    <ul class="grid-container">
      <li v-for="(item, index) in dozens" :key="index">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="checkbox"
            class="btn-check"
            :id="`btncheck-${item}`"
            autocomplete="off"
            :value="item"
            :disabled="hasMaxDozens && !isSelect(item)"
            v-model="selectedDozens"
          />
          <label class="btn btn-outline-primary" :for="`btncheck-${item}`">
            {{ item }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  computed: {
    dozens() {
      const type = this.$store.state.defaultConfig.name;
      return Array.from({ length: this.amount }, (x, i) =>
        type === "SENA" ? i + 1 : i
      );
    },
    hasMaxDozens() {
      const amountOfSelectItens = this.$store.state.selectedDozens.length;
      const maxDozens = this.$store.state.defaultConfig.max_of_dozens;

      return amountOfSelectItens === maxDozens;
    },
    selectedDozens: {
      get() {
        return this.$store.state.selectedDozens;
      },
      set(value) {
        this.$store.dispatch("changeSelectedDozens", value);
      },
    },
  },
  data() {
    return {};
  },
  props: {
    amount: Number,
  },
  methods: {
    isSelect(dozen) {
      return this.selectedDozens.some((d) => d === dozen);
    },
  },
};
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
