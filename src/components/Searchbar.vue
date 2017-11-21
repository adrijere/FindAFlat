<template>
  <b-form-select v-model="typePlace">
    <option value="flat">Flat</option>
    <option value="residence">Residence</option>
    <option value="houseShare">House share</option>
  </b-form-select>
</template>

<script>
export default {
  name: 'Searchbar',
  data () {
    return {
        typePlace: ''
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
