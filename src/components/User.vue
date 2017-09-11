<template>
    <div class = table-responsive>
  <table class="table table-striped">
      <thead>
      <tr>
        <th class="col-md-2">Name</th>
        <th class="col-md-2">Phone</th>
        <th class="col-md-4">Address</th>
      
        
      </tr>
      </thead>
      <tbody>
         <tr  v-for="user in users">
            <td>{{user.name}} </td>
            <td>{{user.phnumber}} </td>
            <td>{{user.address}}</td>
        </tr>
   </tbody>
    </table>
     </div>
</template>

<script>
export default {
    name: 'user',
    data() {
        return {
            users: []
        }
    },
    methods: {
        fetchUsers: function() {
            this.$http.get('https://fathomless-garden-64968.herokuapp.com/users')
                .then(function(response) {
                    console.log("fetch users");
                    this.users = response.body.data;
                   this.users.forEach(function(element) {
                     var date = element.deliveryDate;
                     date = new Date(date);
                     element.deliveryDate = date.toLocaleString();
                 
                    });
                    
                });
        },
        deleteUsers: function(user) {

            this.$http.delete('http://fathomless-garden-64968.herokuapp.com/users/' + user._id)
                .then(function(response) {
                    console.log("delete users");
                    var index = this.users.indexOf(user);
                    if (index > -1) {
                        this.users.splice(index, 1);
                    }
                    console.log(this.users);
                });
        },
        updateuser:function(user){
            this.$http.put('http://fathomless-garden-64968.herokuapp.com/users/' + user._id,user)
             .then(function(response) {
                    console.log("update users");
                    console.log(response);
                });
          
        }
    },
    created() {
        this.fetchUsers();

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
