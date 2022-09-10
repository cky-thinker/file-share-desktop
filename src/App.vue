<template>
  <div id="app">
    <svg-icon name="file-word" />
    <svg-icon name="file-mp3" />
    <svg-icon name="file-directory" />
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";

export default {
  name: "App",
  components: {
    SvgIcon,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
