<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Little Bakery</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/cakeform">Add Cake</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    </nav>
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
          <mSideBar></mSideBar>
          </div>
          <div class="col-md-9">
            <router-view></router-view>
          </div>
        </div>
    
      </div>
          </section>
   
 
  </div>
</template>

<script>
import msideBar from './components/SideBar'
export default {
  name: 'app',
  components: {
        'mSideBar': msideBar
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background:#f4f4f4;
}
/* Navbar */





</style>
