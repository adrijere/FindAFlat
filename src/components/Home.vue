<template>
  <div>
<h1>Welcome here buddy !</h1>
  <p>If you are here, you're looking for a flat. You wanna rent a room or a complete flat in Lille for your Erasmus. <br/>
  You're <strong>definitely</strong> on the good platform.<br/>
  You can filter your research with the search bar and find the place of your dream. When you found a place you like, you just
  have to click on it and you'll have all informations you need !</p>

    <searchbar></searchbar>
    <div class="row">
      <ul id="places">
        <li v-for="place in places">
          {{ place }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Searchbar from './Searchbar.vue'

export default {
    components: {
      Searchbar: Searchbar
    },
    name: 'Home',
    data () {
      return {
        places: ['Petit appartement', 'résidence', 'chambre à louer Jean Michang', 'Mireille', 'Toto']
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
