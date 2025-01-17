<template>
  <div class="d-flex">
    <table class="table table-striped table-hover">
      <thead>
        <tr style="background-color: var(--bs-tertiary-color)">
          <th>#</th>
          <th>pack</th>
          <th>price</th>
          <th>total tickets</th>
          <th>available</th>
          <th>sold</th>
          <th>profit</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="t in store.tickets" :key="t.id">
          <td>#{{ t.id }}</td>
          <td>{{ t.name }}</td>
          <td>€{{ t.price }}</td>
          <td>{{ t.totalTickets }}</td>
          <td class="text-primary">{{ t.availableTickets }}</td>
          <td>{{ t.totalTickets - t.availableTickets }}</td>
          <td class="text-success">
            € {{ (t.totalTickets - t.availableTickets) * t.price }}
          </td>
          <td><i class="bi bi-pencil-fill" @click="openModal(t.id)"></i></td>
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
            <h5 class="modal-title">Edit Packs</h5>
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
                >Price</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="type"
                v-model="price"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Number</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="seats"
                v-model="number"
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
import { useTicketsStore } from "@/stores/tickets.js";
export default {
  data() {
    return {
      store: useTicketsStore(),
      showModal: false,
      selectedId: 0,
      name: "",
      price: "",
      number: "",
    };
  },
  methods: {
    openModal(idPack) {
      this.selectedId = idPack;
      this.showModal = true;
    },
    editPack() {
      const selectedPack = this.store.tickets.find(
        (t) => t.id === this.selectedId
      );

      if (selectedPack) {
        if (this.name && this.name !== selectedPack.name) {
          selectedPack.name = this.name;
        }
        if (this.price && this.price !== selectedPack.price) {
          selectedPack.price = this.price;
        }
        if (this.number && this.number !== selectedPack.totalTickets) {
          selectedPack.totalTickets = this.number;
        }
      }
      this.clearInputs;
    },

    closeModal() {
      this.showModal = false;
      this.selectedId = 0;
    },
    handleClick() {
      this.editPack();
      this.closeModal();
    },
    clearInputs() {
      this.name = "";
      this.price = "";
      this.number = "";
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
