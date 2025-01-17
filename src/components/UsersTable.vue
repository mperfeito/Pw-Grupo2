<template>
  <div>
    <div >
      <table class="table table-striped table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>register</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="user in store.users" :key="user.id">
            <td>#{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ formattedDate(user.registerDate) }}</td>
            <td :class="user.blocked ? 'text-warning' : 'text-success'">
              {{ user.blocked ? "blocked" : "unblocked" }}
            </td>
            <td>
              <i
                v-if="user.id !== 0"
                class="bi bi-gear-fill"
                @click="openModal(user.id)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="modal fade"
      :class="{ show: showModal }"
      tabindex="-1"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">User Settings</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex">
            <div class="d-flex me-2 align-items-center">
              <button @click="deleteUser()" class="btn btn-outline-danger">
                <span class="me-2"> Delete User </span>
                <i class="bi bi-x-circle"></i>
              </button>
            </div>
            <div class="d-flex me-2 align-items-center">
              <button @click="blockUser()" class="btn btn-outline-warning">
                <span class="me-2"> Block User </span>
                <i class="bi bi-ban"></i>
              </button>
            </div>
            <div class="d-flex align-items-center">
              <button @click="unBlockUser()" class="btn btn-outline-success">
                <span class="me-2"> Unblock User </span>
                <i class="bi bi-ban"></i>
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" @click="closeModal()">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop" v-if="showModal" @click="closeModal"></div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";

export default {
  data() {
    return {
      store: useUsersStore(),
      showModal: false,
      selectedId: -1,
    };
  },
  methods: {
    openModal(idUser) {
      this.selectedId = idUser;
      this.showModal = true;
    },
    deleteUser() {
      this.store.deleteUser(this.selectedId);
    },
    blockUser() {
      this.store.blockUser(this.selectedId);
    },
    unBlockUser() {
      this.store.unBlockUser(this.selectedId);
    },
    closeModal() {
      this.showModal = false;
      this.selectedId = -1;
    },
    formattedDate(date) {
      const parsedDate = Date.parse(date);
      if (isNaN(parsedDate)) {
        return "Invalid date";
      }
      return new Intl.DateTimeFormat("en-US").format(new Date(parsedDate));
    },
  },
};
</script>

<style lang="scss" scoped>
.modal.show {
  display: block;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
</style>
