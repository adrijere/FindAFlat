<template>
  <select>
    <option value="appartement">Appartement</option>
    <option value="résidence">Résidence</option>
    <option value="colocation">Colocation</option>
  </select>
</template>

<script>
export default {
  name: 'Searchbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  border-radius: 10px;
  border: 1px black solid;
  padding: 5px;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
