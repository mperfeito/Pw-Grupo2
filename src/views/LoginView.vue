<template>
  <div>
    <LoginForm @login="loginUser" @loginWithGoogle="loginWithGoogle" :loginMessage="message"></LoginForm>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";
import LoginForm from "@/components/LoginForm.vue";


export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      store: useUsersStore(),
      message: "",
    };                                                                                                                                                                        
  },
  methods: {
    loginUser(email, password) {
      if (!email || !password) {
        this.message = "All fields are required!";
        return;
      }
      if (this.store.login(email, password)) {
        if (this.store.currentUser.id === 0) {
          this.$router.push("/admin");
        } else {
          this.$router.push("/home");
        }
      } else {
        this.message = "Login failed. Please check your email and password.";
      }
    },
    loginWithGoogle(googleUser) {
      if (googleUser) {
        this.store.loginWithGoogle(googleUser);
        this.$router.push("/"); 
      } else {
        this.message = "Google login failed.";
      }
    },
  },
};
</script>

<style lang="scss" scoped>  
* {
    font-family: 'Ysabeau Infant';  
} 
</style>
