<template>
  <b-input-group class="search">
    <b-form-input v-model="search" class="custom-input" size="small" placeholder="Pesquisar usuário">
    </b-form-input>
    <b-input-group-prepend>
      <span class="input-group-text"> <b-icon icon="search"></b-icon></span>
    </b-input-group-prepend>
  </b-input-group>
</template>

<script>
export default {
  name: 'Search',
  data(){
    return {
      search: '',
      timer: ''
    }
  },
  watch: {
    search: function() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$events.emit("query", this.search);
      }, 500);
    }
  }
}
</script>

<style scoped>
.search{
  max-width: 250px;
}

.custom-input {
  padding: 8px;
  background: transparent;
  border: none;
  color: #ffffff!important;
  outline:none;
}

.input-group-text{
  background: transparent!important;
  border: none!important;
  color: #ffffff!important;
}
</style>