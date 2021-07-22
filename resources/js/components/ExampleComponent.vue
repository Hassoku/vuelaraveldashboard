<template>
<div>
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3" href="#">Sign out</a>
    </div>
  </div>
</header>
<div class="container-fluid">
  <div class="row">
     <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              <span data-feather="home"></span>
              <v-icon name="eye"> </v-icon>Dashboard

            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product">
              <span data-feather="file"></span>
              Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/categories">
              <span data-feather="shopping-cart"></span>
              Categories
            </router-link >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tags">
              <span data-feather="users"></span>
              Tags
            </router-link >
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/orders">
              <span data-feather="bar-chart-2"></span>
              Orders
            </router-link >
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/users">
              <span data-feather="layers"></span>
              Users
            </router-link >
          </li>
        </ul>



      </div>
    </nav>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
      <router-view></router-view>
      </main>
    </div>
</div>
</div>
</template>
<script>
 import customIcon from 'vue-icon/lib/vue-feather.esm'
   export default{
       components: {
            customIcon
        },
        data: function () {
            return {
                baseClass: 'v-icon'
            }
        }

   }
</script>
<style scope>
    .v-icon,
    .icon {
        width: 14px;
    }
</style>
