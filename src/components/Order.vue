<template>
    <div class = table-responsive>
  <table class="table table-striped">
      <thead>
      <tr>
        <th class="col-md-2">Name</th>
        <th class="col-md-2">Phone</th>
        <th class="col-md-4">Address</th>
        <th>Date</th>
        <th>Delivered</th>
        
      </tr>
      </thead>
      <tbody>
         <tr  v-for="order in orders">
            <td>{{order.name}} </td>
            <td>{{order.phnumber}} </td>
            <td>{{order.deliveryaddress}}</td>
            <td>{{order.deliveryDate}}</td>
         <td class="col-md-1"><input type="checkbox" v-model="order.isdelivered"  @click="updateOrder(order)"/></td> 
        
        <td><router-link class="btn btn-default" v-bind:to="'/order/'+order._id">View</router-link></td>
        <td>
             <button class="btn btn-default" v-on:click="deleteOrder(order)">Delete</button>
         </td>

        </tr>
   </tbody>
    </table>
     </div>
</template>

<script>
export default {
    name: 'order',
    data() {
        return {
            orders: []
        }
    },
    methods: {
        fetchOrders: function() {
            this.$http.get('https://fathomless-garden-64968.herokuapp.com/order')
                .then(function(response) {
                    console.log("fetch orders");
                    this.orders = response.body.data;
                   this.orders.forEach(function(element) {
                     var date = element.deliveryDate;
                     date = new Date(date);
                     element.deliveryDate = date.toLocaleString();
                 
                    });
                    
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
        },
        updateOrder:function(order){
            this.$http.put('http://fathomless-garden-64968.herokuapp.com/order/' + order._id,order)
             .then(function(response) {
                    console.log("update orders");
                    console.log(response);
                });
          
        }
    },
    created() {
        this.fetchOrders();

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


</style>
