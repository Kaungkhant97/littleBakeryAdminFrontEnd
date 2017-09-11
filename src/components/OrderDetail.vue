<template>
    <div class ="container">
      <div class ="row">
      <div class="jumbotron col-md-12">
        <h1 >{{order.name}} </h1>
        </div>
        </div>
        <div class ="row">
      <h4 class="col-md-3">Phone Number</h4>    <h4 class="col-md-9">  {{order.phnumber}} </h4>
      </div>
        <div class ="row">
      <h4 class="col-md-3">Delivery Address </h4>  <h4 class="col-md-9">{{order.deliveryaddress}}</h4>
      </div>
       <div class ="row">
     <h4 class="col-md-3">Delivery Date </h4>   <h4 class="col-md-9" >{{date}}</h4>
     </div>
     <div class ="row">
     <h4 class="col-md-3">Delivery time </h4>   <h4 class="col-md-9" >{{time}}</h4>
     </div>
      <div class ="row">
          <div  v-for=" orderitems in order.orderitem">
        <Cakeitem  v-bind:id="orderitems.cakeid"  v-bind:amount="orderitems.amount"></Cakeitem>
         </div>
            </div>      
     </div>
</template>

<script>
        import Cakeitem from './Cakeitem';
export default {

    name: 'orderDetail',
    data() {
        return {
            order: {},
            date:"",
            time:""
        }
    },
    components: {
        Cakeitem
    },
    methods: {
        fetchOrders: function(id) {
            this.$http.get('https://fathomless-garden-64968.herokuapp.com/order/'+id)
                .then(function(response) {
                    console.log("fetch orders");
                    console.log(response.body);
                    this.order = response.body.data;
                     var date = this.order.deliveryDate;

                     date = new Date(date);
                     var month = date.getMonth()+1;
                     this.date = date.getDate()+"/"+month+"/"+date.getFullYear();
                     var hour = date.getHours()+1;
                     this.time =hour+":"+date.getMinutes();
                    console.log(this.date);
                    console.log( this.time);

                });
        },
        deleteOrder: function(order) {

            this.$http.delete('http://fathomless-garden-64968.herokuapp.com/order/' + order._id)
                .then(function(response) {
                    console.log("delete orders");
                    var index = this.orders.indexOf(order);
                    if (index > -1) {
                        this.orders.splice(index, 1);
                    }
                    console.log(this.orders);
                });
        }
    },
    created() {
        this.fetchOrders(this.$route.params.id);

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

a {
    color: #42b983;
}
</style>
