<template>
  <div id="user">
    <Navbar />
    <Loading v-if="loading === true"/>
    <div class="container" v-else>
      <div class="row" v-if="users.length != 0">
        <div
          class="col-xl-3 col-lg-6 col-md-6 col-sm-6"
          v-for="(user, index) in users"
          :key="index"
        >
          <Cards :user="user" />
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5" v-else>
        <div class="row">
          <div class="col-md-12 ">
              <img class="center" src="https://icon-library.com/images/found-icon/found-icon-20.jpg" alt="">
          </div>
          <h1 class="pl-5 center text-white">Usuário não encontrado</h1>
        </div>
      </div>
      <div class="mt-3 d-flex justify-content-center" v-if="row > perPage">
        <b-pagination
          v-model="currentPage"
          :total-rows="row"
          :per-page="perPage"
          size="lg"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar';
import Cards from './components/card';
import Loading from '@/widget/loading';
export default {
  name: "Users",
  components: {
    Navbar,
    Cards,
    Loading
  },
  data() {
    return {
      loading: true,
      users: [],
      row: 0,
      perPage: 20,
      currentPage: 1
    }
  },
  methods: {
    getUsers() {
      this.$Api.call('get', `users?since=${this.currentPage}&per_page=${this.perPage}`).then(response => {
        this.row = 100
        this.users = response.data
        this.loading = false
      }).catch(error =>{ 
        this.$swal({
          icon: 'error',
          title: 'Algo deu errado na busca!',
          text: error.message
        })
      })
    }
  },
  watch: {
    currentPage(){
      this.loading = true
      this.getUsers();
    }
  },
  mounted() {
    this.$events.off('query');
    this.$events.on('query', query => {
      this.currentPage = 1
      this.loading = true
      if(query.length === 0) { this.getUsers()}
      else {
        this.$Api.call('get', `search/users?q=${query}&page=${this.currentPage}&per_page=${this.perPage}`).then(response => {
          this.users = response.data.items
          this.row = this.users.length
          this.loading = false
        }).catch(error =>{
          this.$swal({
            icon: 'error',
            title: 'Algo deu errado na busca!',
            text: error.message
          })
        })
      }
    });
  },
  created() {
    this.getUsers()
    this.$events.emit('loading-event', true)
  }
}
</script>

<style scoped>
.center{
  display: block; margin: auto;
}
</style>