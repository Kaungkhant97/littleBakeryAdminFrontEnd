<template>
  
    <div class="container">
      <div class="row">
 <div class="card col-md-3 border" v-for="cake in cakes">
  <img class="card-img-top " v-bind:src="cake.imgurl" alt="Card image cap"  height="150px">
  <div class="card-block border">
    <h3 class="card-title  ">{{cake.name}}</h3>
    <h5 class="card-text">{{cake.description}}</h5>
    <h5 class="card-text">{{cake.price}} kyat</h5>
    <Button class="btn btn-default pull-right pushmargin"  v-on:click="deleteCake(cake)">DELETE</Button>
    </div>
    </div>
  
</div>


        
  </div>
</template>

<script>
export default {
  name: 'cake',
  
  data () {
    return {
       cakes:[]
    }
  },
  methods: {
    fetchCakes:function(){
        this.$http.get('https://fathomless-garden-64968.herokuapp.com/cake')
          .then(function(response){
            console.log("fetch cakes");
            this.cakes = response.body.data;
            console.log(this.cakes);
          });
      },
      deleteCake:function(cake){
        
        this.$http.delete('http://fathomless-garden-64968.herokuapp.com/cake/'+cake._id)
          .then(function(response){
            console.log("delete cakes");
            var index = this.cakes.indexOf(cake);
    if (index > -1) {
      this.cakes.splice(index, 1);
    }
            console.log(this.cakes);
          });
      }
  },
created () {
this.fetchCakes();
  
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
  margin: 0 10px;
}
.card{
  margin:13px;

}
.pushmargin{
  margin-right: 54px;
}


</style>
