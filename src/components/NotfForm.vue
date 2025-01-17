<template>
  <div class="w-75">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <div class="dropdown">
        <button
          class="btn btn-outline-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select users
        </button>
        <ul class="dropdown-menu p-2">
          <li>
            <input
              type="checkbox"
              class="form-check-input"
              id="selectAll"
              @change="toggleSelectAll"
              :checked="isAllSelected"
            />
            <label class="form-check-label ms-2" for="selectAll">All</label>
          </li>
          <li><hr class="dropdown-divider" /></li>

          <li v-for="user in store.users" :key="user.id">
            <input
              v-if="user.id !== 0"
              type="checkbox"
              class="form-check-input"
              :id="'user-' + user.id"
              :value="user.id"
              v-model="selectedUsers"
            />
            <label
              v-if="user.id !== 0"
              class="form-check-label ms-2"
              :for="'user-' + user.id"
            >
              {{ user.email }}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Message</label
      >
      <textarea
        class="form-control mb-1"
        id="exampleFormControlTextarea1"
        rows="7"
        v-model="message"
      ></textarea>
      <div class="text-end">
        <span :class="messageClass">{{ errorMessage }}</span>
      </div>
    </div>
    <div class="text-end">
      <button class="btn btn-dark" @click="sendNotification">
        Send notification
      </button>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/stores/users.js";

export default {
  data() {
    return {
      store: useUsersStore(),
      message: "",
      selectedUsers: [],
      errorMessage: "",
      messageType: "",
    };
  },
  computed: {
    isAllSelected() {
      return this.selectedUsers.length === this.store.users.length;
    },
    messageClass() {
      return {
        "text-success": this.messageType === "success",
        "text-danger": this.messageType === "error",
      };
    },
  },
  methods: {
    toggleSelectAll(event) {
      if (event.target.checked) {
        this.selectedUsers = this.store.users.map((user) => user.id);
      } else {
        this.selectedUsers = [];
      }
    },
    sendNotification() {
      if (this.selectedUsers.length === 0) {
        this.errorMessage = "Please select at least one user.";
        this.messageType = "error";
        return;
      }

      const selectedEmails = this.store.users
        .filter((user) => this.selectedUsers.includes(user.id))
        .map((user) => user.email);

      const success = this.store.sendNotification(selectedEmails, this.message);

      if (success) {
        this.errorMessage = "Notification sent successfully!";
        this.messageType = "success";
        this.message = "";
        this.selectedUsers = [];
      } else {
        this.errorMessage = "Error sending notification";
        this.messageType = "error";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
