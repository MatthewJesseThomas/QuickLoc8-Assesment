<template>

    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">QUICKLOC8</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/prices">Prices</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/message">Messages</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/trip">Trip</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/vehicle">Vehicles</router-link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
nav {
    box-shadow: 0.3vw 0.5vw 0.45vw 0.1vw;
    height: 8rem;
    align-items: center;
}

.nav-item:hover {
    transform: scale(1.05);
}

.nav-link:hover {
    color: #42b983;
}
</style>
  