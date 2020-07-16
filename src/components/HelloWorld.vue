<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0;
}

@media screen and (min-width: 320px) {
  h1 {
    font-size: 2em;
  }
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 3em;
  }
}

div.hello {
  width: 100%;
}
</style>
