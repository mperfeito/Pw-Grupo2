<template>
  <RegisterForm
    @register="registerUser"
    :registerMessage="message"
  ></RegisterForm>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
import { useUsersStore } from "@/stores/users.js";

export default {
  components: {
    RegisterForm,
  },
  data() {
    return {
      store: useUsersStore(),
      message: "",
    };
  },
  methods: {
    registerUser(name, email, password) {
      if (!name || !email || !password) {
        this.message = "All fields are required!";
        return;
      }
      const userExists = this.store.users.find((u) => u.email === email);
      if (!userExists) {
        this.store.addUser(name, email, password);
        this.$router.push("/home");
      } else {
        this.message = "The user already exists!";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
