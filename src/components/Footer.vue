<template>
  <div id="footer" class="footer">
    <p>
      Senior Software Developer based in São Paulo (Brazil).
    </p>
    <p id="links">
      <a href="https://www.github.com/willsgimenes" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/william-gimenes/" target="_blank">
        Linkedin
      </a>
      <a href="https://listen.willgimenes.dev" target="_blank">
        Get a song
      </a>
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
  background: url("./../assets/external.svg") no-repeat;
  background-position: 100% calc(100% - 2px);
  background-size: 14px 14px;
  color: #2c3e50;
  margin: 0 5px;
  padding-right: 20px;
  text-decoration: none;
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

p#links {
  line-height: 2em;
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
