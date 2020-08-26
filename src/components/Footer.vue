<template>
  <div id="footer" class="footer">
    <p>
      Senior Software Developer based in São Paulo (Brazil).
    </p>
    <ul id="links">
      <li>
        <a href="https://www.github.com/willsgimenes" target="_blank">Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/william-gimenes/" target="_blank">
          Linkedin
        </a>
      </li>
      <li>
        <a href="https://listen.willgimenes.dev" target="_blank">
          Get a song
        </a>
      </li>
    </ul>
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
  background-size: 11px 11px;
  color: #2c3e50;
  margin: 0 5px;
  padding-right: 20px;
  text-decoration: none;
  font-size: 0.7em;
}

a:first-child {
  margin-left: 0;
}

a:last-child {
  margin-right: 0;
}

p {
  line-height: 1.7em;
}

#links {
  line-height: 2em;
  list-style: none;
  margin: 0;
  padding: 0;
}

#links li {
  line-height: 1.3em;
}

@media screen and (min-width: 320px) {
  p {
    font-size: 12px;
  }
}

@media screen and (min-width: 768px) {
  p,
  a {
    font-size: 16px;
  }

  #links li {
    display: inline-block;
    margin: 10px;
  }

  a {
    background-position: 100% calc(100% - 4px);
    background-size: 14px 14px;
  }
}
</style>
