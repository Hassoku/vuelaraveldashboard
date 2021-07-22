<template>
<div>
Category
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
     <form  @submit.prevent="addCategory">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Category</label>
    <input type="text"  class="form-control"  aria-describedby="emailHelp" v-model="category.category">
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Sub Category</label>

     <select  v-model="category.subCategory" class="form-control">
     <option v-for="category in categories" :key="category.id" :value="category.category">{{category.category}}</option>

     
     </select>
   
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
 
  <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category</th>
              <th scope="col">Sub Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{ category.id }}</td>
              <td>{{ category.category }}</td>
              <td>{{ category.sub_category }}</td>
              <td><div class="btn-group" role="group">
                        <router-link :to="{name: 'categoriesedit', params: { id: category.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteCategory(category.id)">Delete</button>
                    </div></td>
             
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
         categories : [],
         category: {}
      }
   },
    created() {
             axios
                .get('/api/categories')
                .then(response => {
                    this.categories = response.data;
                });
        },

         methods: {
            addCategory(){

               axios.post('/api/categories', this.category)
                    .then(function (response) {
                          this.$toastr.s("SUCCESS MESSAGE", "Success Toast Title");
                         })
                    .catch(function (error) {
                            console.log(error);
                     });


                 },
                   deleteCategory(id) { 
                 axios
                    .delete(`/api/categories/${id}`)
                    .then(response => {
                        let i = this.categories.map(data => data.id).indexOf(id);
                        this.categories.splice(i, 1)
                         this.$toastr.s("SUCCESS MESSAGE", "Success Toast Title");

                    });
            }             
         },
       

   }
</script>
