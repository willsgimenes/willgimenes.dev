<template>
  <div id="footer" class="footer">
    <p>
      Senior Software Developer based in São Paulo (Brazil).
    </p>
    <p>
      <a href="https://www.github.com/willsgimenes" target="_blank">
        Github
      </a>
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

@media screen and (min-width: 320px) {
  p {
    font-size: 12px;
  }
}

@media screen and (min-width: 768px) {
  p {
    font-size: 16px;
  }
}
</style>
