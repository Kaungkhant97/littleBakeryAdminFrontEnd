<template>

     <div class="list-group">
         <a href="index.html" class="list-group-item active main-color-bg">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
        </a>
              
              <router-link to="/"><a  class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Cakes </a> </router-link>
              <router-link to="/order"><a  class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Orders </a></router-link>
          <router-link to="/user"><a  class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Users </a></router-link>
            </div>
            
</template>

<script>
export default {
  name: 'cake',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group{
     text-align: center;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a:hover {
  color: #42b983;
}


</style>
