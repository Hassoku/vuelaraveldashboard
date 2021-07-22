<template>
<div>
Tags
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add New</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Tags</button>
  </li>

</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
     <form  @submit.prevent="addTag">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Tag</label>
    <input type="text"  class="form-control"  aria-describedby="emailHelp" v-model="tag.tag">
   
  </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tag</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="tag in tags">
              <td>{{tag.id}}</td>
              <td>{{tag.tag}}</td>
              <td>tabular</td>
         
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
        tags: [],
         tag: {}
      }
   },
     created() {
             axios
                .get('/api/tags')
                .then(response => {
                    this.tags = response.data;
                });
        },
        methods: {
           addTag(){

               axios.post('/api/tags', this.tag)
                    .then(function (response) {
                          this.$toastr.s("SUCCESS MESSAGE", "Success Toast Title");
                         })
                    .catch(function (error) {
                            console.log(error);
                     });


                 },
                   deleteTag(id) { 
                 axios
                    .delete(`/api/tags/${id}`)
                    .then(response => {
                        let i = this.tags.map(data => data.id).indexOf(id);
                        this.tags.splice(i, 1)
                         this.$toastr.s("SUCCESS MESSAGE", "Success Toast Title");
                          this.$router.push({ name: 'tags' });

                    });
            }

        }


   }


</script>
