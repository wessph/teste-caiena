<template>
  <div class="card card-custom gutter-b card-stretch">
    <div class="card-body text-center pt-4">
      <div class="mt-7">
        <div class="symbol symbol-circle symbol-lg-75">
          <img class="img-config" :src="user.avatar_url" alt="image">
        </div>
      </div>
      <div class="my-2">
        <span class="text-dark font-weight-bold text-hover-primary font-size-h4">{{ user.login }}</span>
      </div>
      <div class="mt-9 mb-6">
        <a :href="user.html_url" target="_blank" class="btn-grad">Acesso rápido</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Card',
 props: ['user']
}
</script>

<style>
.img-config{
  width: 150px;
  height: auto;
  border-radius: 50%;
}

.card{
  border-radius: 5%;
  margin-bottom: 10px;
}

.btn-grad {background-image: linear-gradient(to right, #4b6cb7 0%, #182848  51%, #4b6cb7  100%)}
.btn-grad {
  margin: 10px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

         
</style>