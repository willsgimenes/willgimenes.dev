<template>
  <div id="footer">
    <p>
      Brazilian Senior Software Developer based in São Paulo (Brazil).
    </p>
    <p>
      <a href="https://www.github.com/willsgimenes" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/william-gimenes/" target="_blank"
        >Linkedin</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
div#footer {
  text-align: left;
  bottom: 10px;
  font-size: 14px;
  height: 80px;
  padding-top: 0px;
  position: absolute;
  width: calc(100% - 20px);
}

a {
  margin: 0 5px;
}

a:first-child {
  margin-left: 0;
}

a:last-child {
  margin-right: 0;
}

p {
  line-height: 1.3;
}
</style>
