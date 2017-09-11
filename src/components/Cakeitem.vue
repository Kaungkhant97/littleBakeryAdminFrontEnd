<template>
  
   
 <div class="card col-md-4 border">
 
  <img class="card-img-top " v-bind:src="cake.imgurl" alt="Card image cap"  height="150px">
  <div class="card-block border">
    <h4 class="card-title  ">{{cake.name}}</h4>
   <div class="card-text row"><span class="col-md-3">Price: </span><span class="col-md-9">{{cake.price}} kyat</span></div>
   <div class="card-text row" ><span class="col-md-3">Quantity:</span> <span class="col-md-9">{{amount}} items</span></div>


    
   
  
</div>


        
  </div>
</template>

<script>

export default {
  name: 'Cake',
  props: {
   id: {type:String},
     amount:{type:Number}
   
    },

  data () {
    return {
       cake:{},
       date:"",
       time:"",
    }
  },
  methods: {
    fetchCakes:function(id){
        this.$http.get('https://fathomless-garden-64968.herokuapp.com/cake/'+id)
          .then(function(response){
            console.log("fetch cakes");
            this.cake = response.body.data;
            console.log(this.cake);
          });
      },
     
  },
created () {
this.fetchCakes(this.id);
  
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


</style>
