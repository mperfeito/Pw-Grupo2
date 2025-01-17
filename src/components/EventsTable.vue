<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>event</th>
          <th>type</th>
          <th>total seats</th>
          <th>available</th>
          <th>occupied</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="e in store.events" :key="e.id">
          <td>#{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.type }}</td>
          <td>{{ e.totalSeats }}</td>
          <td class="text-primary">{{ e.availableSeats }}</td>
          <td class="text-danger">{{ e.totalSeats - e.availableSeats }}</td>
          <td><i class="bi bi-pencil-fill" @click="openModal(e.id)"></i></td>
        </tr>
      </tbody>
    </table>
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
            <h5 class="modal-title">Edit Events</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex flex-column">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
                v-model="name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Type</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="type"
                v-model="type"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Price</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="price"
                v-model="price"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Seats</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="seats"
                v-model="seats"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" @click="handleClick">
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
import { useEventsStore } from "@/stores/events.js";
export default {
  data() {
    return {
      store: useEventsStore(),
      showModal: false,
      selectedId: 0,
      name: "",
      type: "",
      price: "",
      seats: "",
    };
  },
  methods: {
    openModal(idEvent) {
      this.selectedId = idEvent;
      this.showModal = true;
    },
    editEvent() {
      const selectedEvent = this.store.events.find(
        (e) => e.id === this.selectedId
      );

      if (selectedEvent) {
        if (this.name && this.name !== selectedEvent.name) {
          selectedEvent.name = this.name;
        }
        if (this.type && this.type !== selectedEvent.type) {
          selectedEvent.type = this.type;
        }
        if (this.price && this.price !== selectedEvent.price) {
          selectedEvent.price = this.price;
        }
        if (this.seats && this.seats !== selectedEvent.totalSeats) {
          selectedEvent.totalSeats = this.seats;
        }
      }
      this.clearInputs;
    },

    closeModal() {
      this.showModal = false;
      this.selectedId = 0;
    },
    clearInputs() {
      this.name = "";
      this.type = "";
      this.price = "";
      this.setas = "";
    },
    handleClick() {
      this.editEvent();
      this.closeModal();
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
