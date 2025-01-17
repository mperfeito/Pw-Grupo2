<template>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mt-1">
              <button
                class="btn btn-outline-dark position-relative"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i class="bi bi-bell-fill"></i>
                <span
                  v-if="notifications.length"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  {{ notifications.length }}
                </span>
              </button>
              <button @click="logoutUser()" class="btn btn-outline-dark">
                Logout
              </button>
            </div>
            <div class="mt-4">
              <h5 class="card-title">{{ currentUser.name }}</h5>
              <p class="card-text">{{ currentUser.email }}</p>
            </div>

            <button
              type="button"
              class="btn btn-dark mt-3"
              data-bs-toggle="modal"
              data-bs-target="#editProfileModal"
            >
              Change Info
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="editProfileModal"
      tabindex="-1"
      aria-labelledby="editProfileModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProfileModalLabel">Edit Profile</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveChanges">
              <div class="mb-3">
                <label for="userName" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="userName"
                  v-model="newName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userEmail" class="form-label">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="userEmail"
                  v-model="newEmail"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userPassword" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="userPassword"
                  v-model="newPassword"
                  required
                />
              </div>
              <button type="submit" class="btn btn-dark">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Inbox</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <li v-if="notifications.length === 0" class="list-group-item">
          No notifications available.
        </li>
        <ol class="list-group list-group-numbered">
          <li
            v-for="(notification, index) in notifications"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">Notification</div>
              {{ notification }}
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div class="w-75 ms-3 mt-4">
      <span class="display-4">Your Tickets</span>
      <div class="row">
        <div
          v-for="(ticket, index) in uniqueTickets"
          :key="index"
          class="col-12 col-md-6 mb-3"
        >
          <div class="card mt-4">
            <div class="card-body">
              <h5 class="card-title">{{ ticket.name }}</h5>
              <div class="d-flex flex-column">
                <span class="card-text">Type: {{ ticket.type }}</span>
                <span class="card-text">Hours: {{ ticket.hours }}</span>
                <span class="card-text">Price: {{ ticket.price }} €</span>
                <span class="card-text">Quantity: {{ ticket.quantity }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users";

export default {
  data() {
    return {
      store: useUsersStore(),
      newName: "",
      newEmail: "",
      newPassword: "",
    };
  },
  computed: {
    notifications() {
      return this.store.getNotifications();
    },
    tickets() {
      return this.store.getTickets();
    },
    uniqueTickets() {
      const ticketCounts = this.tickets.reduce((acc, ticket) => {
        const existingTicket = acc.find((t) => t.name === ticket.name);
        if (existingTicket) {
          existingTicket.count++;
        } else {
          acc.push({ ...ticket, count: 1 });
        }
        return acc;
      }, []);
      return ticketCounts;
    },
    currentUser() {
      return this.store.currentUser;
    },
  },
  methods: {
    logoutUser() {
      this.store.logout();
      this.$router.push("/");
    },
    saveChanges() {
      this.store.editProfile(this.newName, this.newEmail, this.newPassword);

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("editProfileModal")
      );
      modal.hide();
    },
  },
  mounted() {
    if (this.currentUser) {
      this.newName = this.currentUser.name;
      this.newEmail = this.currentUser.email;
      this.newPassword = this.currentUser.password;
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
}

.btn {
  margin-right: 10px;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
}

.offcanvas-body {
  padding-top: 10px;
}

.offcanvas-header h5 {
  font-size: 1.5rem;
}

.w-75 {
  max-width: 75%;
}

.mt-4 {
  margin-top: 1.5rem;
}
</style>
