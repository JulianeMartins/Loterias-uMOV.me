<template>
  <u-header></u-header>
  <router-view />
</template>
<script>
import UHeader from "./components/Header";
export default {
  components: {
    UHeader,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #2c3e50;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f3f3f3;
  padding: 20px 0;
}

ul,
li {
  list-style: none;
}
.u-btn-group {
  width: 55px;
  label {
    border-radius: 10px;
    border: 1px solid #868686;
    background-color: #fff;
    &:hover {
      background-color: $btn-group-primary-hover;
    }
  }
  .btn-check:checked + .btn {
    background-color: $btn-primary;
    color: #fff;
  }
  .btn-check[disabled] + .btn {
    opacity: 0.4;
  }
}
.btn.u-btn {
  background-color: $btn-primary;
  color: #fff;
  &:hover {
    background-color: $btn-primary-hover;
    color: #fff;
  }
}
</style>
