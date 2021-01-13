<template>
  <nav class="navbar navbar-expand-lg bg-black-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="container nav-caiena">
          <span></span>
          <Search/>
      </div>
    </div>
  </nav>
</template>

<script>
import Search from './components/search';
export default {
  name: "Navbar",
  components: {
    Search
  }
}
</script>

<style>
.bg-black-light{
 background-image: linear-gradient(to right, #4b6cb7 0%, #182848  51%, #4b6cb7  100%)
}

</style>