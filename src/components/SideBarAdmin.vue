<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center p-3"
    style="
      width: 80px;
      height: 100vh;
      background-color: var(--bs-dark-bg-subtle);
    "
  >
    <div class="text-start my-4">
      <i
        class="bi bi-person fs-3"
        data-bs-toggle="tooltip"
        data-bs-title="Users"
        data-bs-offset="0,8"
        @click="$emit('change-content', 'users')"
      ></i>
    </div>
    <div class="my-4">
      <i
        class="bi bi-bookmark-star fs-3"
        data-bs-toggle="tooltip"
        data-bs-title="Events"
        data-bs-offset="0,8"
        @click="$emit('change-content', 'events')"
      ></i>
    </div>
    <div class="my-4">
      <i
        class="bi bi-ticket-perforated fs-3"
        data-bs-toggle="tooltip"
        data-bs-title="Tickets"
        data-bs-offset="0,8"
        @click="$emit('change-content', 'tickets')"
      ></i>
    </div>
    <div class="my-4">
      <i
        class="bi bi-chat-dots fs-3"
        data-bs-toggle="tooltip"
        data-bs-title="Message"
        data-bs-offset="0,8"
        @click="$emit('change-content', 'notifications')"
      ></i>
    </div>
    <div class="my-4">
      <i
        class="bi bi-box-arrow-right fs-3"
        data-bs-toggle="tooltip"
        data-bs-title="Logout"
        data-bs-offset="0,8"
        @click="logOut()"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
  methods: {
    logOut() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
