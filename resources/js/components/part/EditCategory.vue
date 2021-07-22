<template>
<div>
Edit Category

<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
     <form  @submit.prevent="updateCategory">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Category</label>
    <input type="text"  class="form-control"  aria-describedby="emailHelp" value="" v-model="category.category">
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Sub Category</label>

     <select  v-model="category.subCategory" class="form-control">
     <option :key="category.id" :value="category.category" selected>{{category.category}}</option>

     
     </select>
   
  </div>

  <button type="submit" class="btn btn-primary">Update</button>
</form>
</div>
</div>
</div>
</template>
<script>
   export default {
              created() {
            axios.get(`/api/categories/${this.$route.params.id}`)
                .then((res) => {
                console.log(res.data)
                    this.categorty = res.data;
                });
        },
          methods: {
            updateCategory() {
                axios
                    .patch(`/api/categories/${this.$route.params.id}`, this.category)
                    .then((res) => {
                        this.$router.push({ name: 'category' });
                    });
            }
        },
         data() {
            return {
                category: {}
            }
        },

   }

</script>
<style></style>