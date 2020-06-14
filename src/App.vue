<template>
  <div id="app">
    <HelloWorld msg="William is 🏗 the web!!!" />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer,
    HelloWorld
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
}
</style>
