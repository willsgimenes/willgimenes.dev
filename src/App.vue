<template>
  <div id="app">
    <div class="left"></div>
    <div class="right">
      <HelloWorld msg="William is 🏗️ the web!!!" />
      <Footer />
      <div class="image-copyright">
        <small>
          image provided by @bundo at
          <a href="https://unsplash.com/photos/c-S9qxFxtSQ" target="_blank">
            unsplash
          </a>
        </small>
      </div>
    </div>
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
  flex-direction: row;
  padding: 0 0;
  display: flex;
  width: 100%;
}

div.left {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  background: url("./assets/bg.jpg") rebeccapurple;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

div.right {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

div.image-copyright {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
