<template>
  <div
    class="pb-3 btn-group u-btn-group"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <template v-for="(item, index) in options" :key="index">
      <input
        @change="emitChange($event)"
        type="radio"
        class="btn-check"
        name="cardType"
        :id="item.value"
        autocomplete="off"
        v-model="selected"
        :value="item.value"
      />
      <label class="btn" :for="item.value">{{ item.label }}</label>
    </template>
  </div>
</template>
<script>
export default {
  name: "Toggle",
  props: ["options"],
  emits: ["change"],
  data() {
    return {
      selected: this.options[0].value,
    };
  },
  methods: {
    emitChange({ target }) {
      this.$emit("change", target.value);
    },
  },
};
</script>
