<template>
  <div id="app">
    <file-icon filename="test.txt" />
  </div>
</template>

<script>
  import FileIcon from "@/components/FileIcon";

  export default {
  name: "App",
  components: {
    FileIcon
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
