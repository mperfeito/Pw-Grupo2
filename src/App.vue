<script setup>
import { RouterLink, RouterView } from 'vue-router'; 
import NavBar from './components/NavBar.vue'; 
import Footer from './components/Footer.vue'; 
import { useUsersStore } from './stores/users';

const store = useUsersStore(); 

</script>




<template> 
  
  <NavBar v-if='store.currentUser'></NavBar> 
  

  <RouterView /> 
  <Footer></Footer>
</template>

<style scoped>


</style>
