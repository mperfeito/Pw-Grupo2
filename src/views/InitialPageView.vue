<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <span class="display-4 ms-3">Logo</span>
      <div>
        <router-link to="/register">
          <a class="me-4 fs-5" href="register">register</a>
        </router-link>
        <router-link to="/login">
          <a class="fs-5 me-4" href="login">login</a>
        </router-link>
      </div>
    </div>
    <div
      class="container-fluid my-4 position-relative"
      style="height: 300px; background-color: #b84eff"
    >
      <button
        class="btn btn-dark position-absolute bottom-0 end-0 m-3"
        @click="showModal()"
      >
        Tickets
      </button>
    </div>
    <div
      class="container-fluid position-relative"
      style="height: 300px; background-color: #b84eff"
    >
      <button
        class="btn btn-dark position-absolute bottom-0 end-0 m-3"
        @click="showModal()"
      >
        Calendar
      </button>
    </div>
    <div
      class="container-fluid position-relative my-4"
      style="height: 300px; background-color: #b84eff"
    >
      <button
        class="btn btn-dark position-absolute bottom-0 end-0 m-3"
        @click="showModal()"
      >
        See More
      </button>
    </div>

    <div v-if="isModalVisible" class="modal-overlay"></div>

    <div
      v-if="isModalVisible"
      class="modal fade show"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <i class="bi bi-slash-circle-fill me-1"></i>
            <h5 class="modal-title" id="exampleModalLabel">
              Restricted access
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              To view the full content of the site, you need to have an account.
              If you already have one, please log in.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.modalTitle = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
</style>
