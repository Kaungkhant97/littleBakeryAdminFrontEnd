<template>
  
   <div class="panel panel-default">
              <div class="panel-heading main-color-bg">
                <h3 class="panel-title">Cake Upload Form</h3>
              </div>
              <div class="form-group ">
                  <img  class="img-responsive" v-bind:src="imgurl" id="myimg" width="200px" height="100px"><img>
              <label class="custom-file ">
                <input type="file" id="file" @change="uploadImage"  accept="image/*" class="custom-file-input">
                <span class="custom-file-control"></span>
            </label>
            </div>
              <div class="panel-body">
                <form>
                  <div class="form-group">
                    <label>Cake name</label>
                    <input type="text" class="form-control" v-model="name" placeholder="Page Title" >
                  </div>
                  <div class="form-group">
                    <label>Cake Description</label>
                    <textarea name="editor1" class="form-control"  v-model="description" placeholder="Cake Description">
            
                    </textarea>
                  </div>
                
                  <div class="form-group">
                    <label>Ingredients</label> 
                    <div class="row"> 
                    <input type="text" v-model="newIngredient" class="form-control col-md-8"/>               
                  <button v-on:click="addIngredient" class="col-md-4 bottom-right" >add</button>
                  </div>
                  </div>
                   <ul>
                    <li v-for="ing in ingredients">{{ing}}</li>
                 </ul>
            <div class=" form-group">
            <h4>Nutrition</h4>
           
          <div class="col-md-2">
              <label>calories</label>
               </div>
              <div class="col-md-10">
               <input type="text" v-model="calories" name="" placeholder="" class="form-group" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
          </div>
           <div class="col-md-2">
          <label>fat</label> 
           </div>
          <div class="col-md-10">
          <input type="text" v-model="fat" name="" placeholder="" class="form-group"onkeypress="return event.charCode >= 48 && event.charCode <= 57">
            </div>

            <div class="col-md-2">
          <label>cholesterol</label> 
          </div>
          <div class="col-md-10">
          <input type="text" v-model="cholesterol" name="" placeholder="" class="form-group"onkeypress="return event.charCode >= 48 && event.charCode <= 57">
         </div>
          
               <div class="col-md-2">
          <label>suger</label> 
           </div>
           <div class="col-md-10">
          <input type="text" v-model="sugar"  placeholder="" class="form-group" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
         </div>
          
            <div class="col-md-2">
          <label>protein</label> 
           </div>
            <div class="col-md-10">
                <input type="text" v-model="protein"  name="" placeholder="" class="form-group"onkeypress="return event.charCode >= 48 && event.charCode <= 57">
          </div>
           
           
             </div>
             <div class="form-group">
              <label>Price</label>
              <div class="form-group">
             </div>        
<input type="text"  v-model="price" placeholder="" class="form-group"onkeypress="return event.charCode >= 48 && event.charCode <= 57">   
               </div>
<div class="btn-group form-group">
  <select v-model="selectedcat" class="selectpicker">

    <option v-for="cat in categories">{{cat.name}}</option> 

  </select>
</div>     
           <div>

           </div>
                  
                  <input type="submit" class="btn btn-default" value="Submit" v-on:click="postData">
                </form>
              </div>
              
</div>


        

 
</template>

<script>
import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyCCMFmTd_bmUeNX8mRnlQY-vY8y4E3poQ0",
    authDomain: "littlebakery-5534f.firebaseapp.com",
    databaseURL: "https://littlebakery-5534f.firebaseio.com",
    projectId: "littlebakery-5534f",
    storageBucket: "littlebakery-5534f.appspot.com",
    messagingSenderId: "340534185430"
};
if (!firebase.apps.length) {
var defaultapp = firebase.initializeApp(config);

}
var storageRef = firebase.storage().ref();

export default {
  name: 'cakeform',
  data () {
    return {
        name:"",
        imgurl:"https://firebasestorage.googleapis.com/v0/b/littlebakery-5534f.appspot.com/o/default-thumbnail.jpg?alt=media&token=7f14b9af-6b52-48e3-87dc-6c659fb52267",
        catid:0,
        newIngredient:"",
        description:"",
        calories:0,
        fat:0,
        cholesterol:0,
        sugar:0,
        protein:0,
        price:0,
       categories:[],
       ingredients:[],
       selectedcat :"",
    }
  },
  methods: {
    fetchCategories:function(){
        this.$http.get('https://fathomless-garden-64968.herokuapp.com/category')
          .then(function(response){
            console.log("fetch categories");
            this.categories = response.body.data;
            console.log(this.categories);
          });
      },
      resetCake:function(){
         this.name="",
         this.imgurl="https://firebasestorage.googleapis.com/v0/b/littlebakery-5534f.appspot.com/o/default-thumbnail.jpg?alt=media&token=7f14b9af-6b52-48e3-87dc-6c659fb52267";
       document.getElementById('myimg').src = this.imgurl;
       this.catid=0;
         this.newIngredient="";
         this.description="";
         this.calories=0;
         this.fat=0;
         this.cholesterol=0;
        this. sugar=0;
        this. protein=0;
         this.price=0;
      
        this.ingredients=[];
        this.selectedcat="";
      },
      getCategoryNumber:function(){

            var selcat = {};
            for(let i=0;this.categories.length;i++){
                 let cat = this.categories[i];
               
                if(cat.name == this.selectedcat){
                   selcat = cat;
                  return selcat._id;
                }
            }
           
      },
     
       addIngredient:function(e){
          this.ingredients.push(this.newIngredient);
        e.preventDefault();
     },
      postData:function(e){
          var url =document.getElementById('myimg').src;

          
        this.imgurl = url;
        console.log(this.imgurl);
        this.catid = this.getCategoryNumber();

         let mnutrition = {
         calories:parseInt(this.calories),
         fat :parseInt(this.fat),
         cholesterol:parseInt(this.cholesterol),
         sugar:parseInt(this.sugar),
         protein:parseInt(this.protein)
     };

     let mcake={
         name: this.name,
         imgurl:this.imgurl,
         catid: this.catid,
         description:this.description,
         nutrition: mnutrition,
         price:parseInt(this.price),
         ingredient:this.ingredients
     }
     console.log(mcake);
    this.$http.post('https://fathomless-garden-64968.herokuapp.com/cake', mcake)
                    .then(function(response){
                        console.log(response);
                 });
                 alert("new Cake added");
                 this.resetCake();
               e.preventDefault();      

      },
      setImage:function(image){
        this.imgurl = image;
      },
      uploadImage: function(e){
        var files = e.target.files;
        var meta = {
            contentType: 'image/png'
        };
        console.log(files);
        if(!files[0]) {
        return;
      }else{
          var mfile =files[0];
      }
     
var uploadTask = storageRef.child('images/' + mfile.name).put(mfile, meta);

uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

   

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
    var url =uploadTask.snapshot.downloadURL;
   
  console.log(url);
 
document.getElementById('myimg').src = url;
});

    }








  },
created () {
this.fetchCategories();
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

img{
  margin-left: 50px;
  margin-top: 50px;
    
}
.bootstrap-tagsinput {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  display: inline-block;
  padding: 4px 6px;
  color: #555;
  vertical-align: middle;
  border-radius: 4px;
  max-width: 100%;
  line-height: 22px;
  cursor: text;
}
.bootstrap-tagsinput input {
  border: none;
  box-shadow: none;
  outline: none;
  background-color: transparent;
  padding: 0 6px;
  margin: 0;
  width: auto;
  max-width: inherit;
}
.bootstrap-tagsinput.form-control input::-moz-placeholder {
  color: #777;
  opacity: 1;
}
.bootstrap-tagsinput.form-control input:-ms-input-placeholder {
  color: #777;
}
.bootstrap-tagsinput.form-control input::-webkit-input-placeholder {
  color: #777;
}
.bootstrap-tagsinput input:focus {
  border: none;
  box-shadow: none;
}
.bootstrap-tagsinput .tag {
  margin-right: 2px;
  color: white;
}
.bootstrap-tagsinput .tag [data-role="remove"] {
  margin-left: 8px;
  cursor: pointer;
}
.bootstrap-tagsinput .tag [data-role="remove"]:after {
  content: "x";
  padding: 0px 2px;
}
.bootstrap-tagsinput .tag [data-role="remove"]:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.bootstrap-tagsinput .tag [data-role="remove"]:hover:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
</style>
