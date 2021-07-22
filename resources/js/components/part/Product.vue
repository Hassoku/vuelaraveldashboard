<template>
<div>
Product
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add New</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Categories</button>
  </li>

</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
     <form @submit.prevent="addProduct">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Title</label>
    <input type="text" class="form-control" name="name"  v-model="product.name">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Category</label>
    <select name="category_id" class="form-control" v-model="product.category">
       <option>Select Category</option>
       <option v-for="category in categories" :key="category.id" :value="category.id">{{category.category}}</option>

    </select>

  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="text" name="price" class="form-control" v-model="product.price">

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Discount</label>
    <input type="text" name="discount" class="form-control" v-model="product.discount">

  </div>


  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Product Description</label>
    <textarea class="form-control" v-model="product.description" name="description"></textarea>
  </div>
  <div class="mb-3">

    <label class="form-check-label" for="exampleCheck1">Product Image</label>
    <input type='file' name="image" class="form-control" v-on:change="onChange">
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Title</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
  </div>

</div>

</div>

</template>
<script>
   export default{
          data(){
      return {
         products : [],
         categories : [],
         product : {},
         name: '',
         file :'',

        filesSelected: 0

      }
   },
      created() {
             axios
                .get('/api/products')
                .then(response => {
                    
                    this.categories = response.data.categories;

                   });
               },
               
        methods:{
               onChange(e) {
                   
                this.file= e.target.files[0];
                console.log(this.file)
                
            },
            
               

            addProduct(e){
                 const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                var data = new FormData(e.target);
                 data.append('image', this.file);
                 data.append('name',this.product.name);
                axios.post('api/products',data,config)
                 .then(function (res) {
                        existingObj.success = res.data.success;
                    })
                    .catch(function (err) {
                        existingObj.output = err;
                    });
            }

         
          
   },


   }
</script>
