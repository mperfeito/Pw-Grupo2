<template>
  <div class="container-fluid vh-100 d-flex align-items-stretch p-0 m-0">
    <div class="row flex-grow-1 w-100 m-0">
      <div class="col-8 d-flex justify-content-center align-items-center p-0">
        <div class="text-center w-50">
          <h1>Login Access</h1>
          <p class="mb-5">Use your email for registration</p>

          <input
            class="form-control mb-3"
            type="email"
            placeholder="Email"
            aria-label="default input example"
            v-model="email"
          />
          <div class="d-flex flex-column">
            <input
              class="form-control mb-1"
              type="password"
              placeholder="Password"
              aria-label="default input example"
              v-model="password"
            />
            <div class="text-end mb-4">
              <span class="text-danger">{{ loginMessage }}</span>
            </div>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
          <button @click="checkLogin()" class="btn btn-dark">
            Login with email
          </button>
          <button @click="handleGoogleLogin" class="btn btn-outline-dark mt-1">
            <i class="bi bi-google"></i> Login with Google
          </button>
        </div>
        </div>
      </div>
      <div
        class="col-4 d-flex justify-content-center align-items-center text-center p-0"
        style="background-color: #b84eff; height: 100vh"
      >
        <div>
          <h1 class="text-light">Hello, Friend!</h1>
          <p class="mb-5 text-light">
            Don’t have an account? Don’t worry! <br />
            Enter with your personal information
          </p>
          <router-link :to="'/register'">
            <button type="button" class="btn btn-outline-light">SIGN UP</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  props: {
    loginMessage: String,
  },
  methods: {
    checkLogin() {
      if (this.email && this.password) {
        this.$emit("login", this.email, this.password);
      } else {
        this.$emit("login", null, null);
      }
      this.email = "";
      this.password = "";
    },
    handleGoogleLogin() {
      gapi.load("auth2", () => {
        const auth2 = gapi.auth2.init({
          client_id:
            "307719871437-9fenbrfdk2824gqc8pee3d80q70h0nql.apps.googleusercontent.com",
        });

        auth2.signIn().then((googleUser) => {
          this.$emit("loginWithGoogle", googleUser);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
