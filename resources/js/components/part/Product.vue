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
    <!-- <select name="category_id" class="form-control" v-model="product.category">
       <option>Select Category</option>
       <option v-for="category in categories" :key="category.id" :value="category.id">{{category.category}}</option>

    </select> -->
     <multiselect v-model="productcategory" :options="categories" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Select Category" label="category" track-by="name" :preselect-first="true">
   
  </multiselect>
     <div>

  </div>

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
            <tr v-for="product in products" :key="product.id">
              <td>1,015</td>
              <td>{{product.product_name}}</td>
              <td ><span v-for="cat in product.categories" :key="cat.id">{{cat.category}}</span></td>
              <td>{{product.price}}</td>
              <td> <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button></td>
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
         productcategory:[],
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
                    this.products = response.data.products;



                   });
               },

        methods:{
               onChange(e) {

                this.file= e.target.files[0];
                console.log(this.file)

            },

             addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }



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
                 .then(data => {

                        this.$toaster.success('Product Added.')
                    })
                    .catch(err => {
                     if (err.response.status = 422) {
                         var errors = err.response.data.errors;



                         for (const [key, value] of Object.entries(err.response.data.errors)) {
  this.$toaster.success(value);
}

}
                    });
            },
              deleteProduct(id) {
                 axios
                    .delete(`/api/products/${id}`)
                    .then(response => {12
                        let i = this.products.map(data => data.id).indexOf(id);
                        this.products.splice(i, 1)
                         this.$toaster.success('Product Deleted.')

                    })
                    .catch(err =>{
                      if (err.response.status = 422) {
             console.log(err.response.data);
}

                    })
            }



   },


   }
</script>
