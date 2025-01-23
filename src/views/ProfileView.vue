<template>
  <div class="container mt-5">
        <div class="background-rectangle"></div>
    <div class="row content-row">
      <div class="col-12 col-md-4 position-relative">
        <div class="profile-picture">
          <img src="../assets/profile/profile-pic.png" alt="Profile Picture" class="profile-pic">
        </div>
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card-title-container">
              <h4 class="card-title-text invisible">Perfil</h4>
            </div>
            <div class="card card-profile">
              <div class="card-body">
                <div class="mt-4 text-center profile-info">
                  <h5 class="card-title">{{ currentUser.name }}</h5>
                  <p class="card-text">{{ currentUser.email }}</p>
                    <div class="profile-divider "></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <button
                    type="button"
                    class="btn btn-light fs-5  mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editProfileModal"
                  >
                    Change info
                  </button>
                  <button @click="logoutUser()" class="btn btn-outline-light fs-5  mt-3">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="col-12 col-md-8">
          <div class="card-title-container d-flex justify-content-between align-items-center">
          <h4 class="card-title-text">My Tickets</h4>
          <button
            class="btn btn-outline-light position-relative"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i class="bi bi-bell-fill"></i>
            <span
              v-if="notifications.length"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark"
            >
              {{ notifications.length }}
            </span>
          </button>
        </div>

        <div class="w-100 mt-4 card-yourTickets position-relative">
          <img src="../assets/profile/ticket-image.png" alt="Background Image" class="background-image">
          <div class="row position-absolute top-0 start-0 w-100 h-100">
            <div
              v-for="(ticket, index) in uniqueTickets"
              :key="index"
              class="col-12 col-md-6 mb-3"
            >
              <div class="card card-tickets w-100">
                <div class="card-body">
                  <h5 class="card-title">{{ ticket.name }}</h5>
                  <div class="d-flex flex-column">
                    <span class="card-text"><strong>Type: </strong>{{ ticket.type }}</span>
                    <span class="card-text"><strong>Hours: </strong>{{ ticket.hours }}</span>
                    <span class="card-text"><strong>Price: </strong>{{ ticket.price }} €</span>
                    <span class="card-text"><strong>Quantity: </strong>{{ ticket.quantity }}</span>
                  </div>
                </div>
              </div>
            </div>
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

  .background-rectangle {
  position: absolute;
  top: 7rem;
  left: 0;
  width: 100%;
  height: 15rem;
  background-color: #dcdcf2;
  z-index: -1; 
}

.content-row {
  margin-top: 14rem; 
}

.container .card-profile{
  background-color: #8a89d4;
  z-index: 1;
}

.container .card-title-container{
  background-color: #b84eff;
  padding: 1.9rem;
  margin-bottom: 1.5rem;
  z-index: 1;
}

.card-title-text{
  color: white;
  font-weight: 800;
  font-size: 1.7rem;
}

.profile-picture {
  position: absolute;
  top: 2rem;
  left: 12.5rem;
  transform: translateX(-50%);
  width: 12rem;
  height: 12rem;
  overflow: hidden;
  z-index: 10;
}

.profile-picture img {
  width: 100%;
  height: auto;
}

.profile-info .card-title {
  margin-top: 7rem;
  color: #ffffff;
  font-size: 1.7rem;
}

.profile-info .card-text {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 300;
}

.profile-divider {
  border-bottom: 0.2rem solid white;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
}

.btn-change{
  padding: 0.8rem 3.4rem;
  color: black;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: #F1DCFF;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-change:hover {
  transform: scale(1.1);
  background-color: #d1b3ff;
}

.btn-logout {
  background-color: white;
  color: black;
  font-weight: 600;
  padding: 0.7rem 5rem;
  font-size: 1.2rem;
  margin-bottom: 2.2rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-logout:hover {
  transform: scale(1.1);
  background-color: #e6e6e6;
}

.card-profile{
  z-index: 1;
}

.container .card-yourTickets{
  position: relative;
  background-color: #8a89d4;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
}

.card-yourTickets .row {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.1rem;
  margin-top: 8rem;
}

.card-yourTickets .background-image {
  margin: 2rem;
  object-fit: cover;
  z-index: 0;
}

.card-tickets .card-title{
  color: #8a89d4;
  font-size: 1.35rem;
  font-weight: 650;
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
