<template>
  <div class="container my-4">
    <div v-if="selectedEvent" class="card">
      <div class="card-body">
        <div class="d-flex flex-column align-items-start mb-3"></div>
        <div class="d-flex justify-content-around mb-3 align-items-center">
          <h2 class="card-title">{{ selectedEvent.name }}</h2>
          <div class="d-flex flex-column">
            <span class="card-text">
              <strong>Hours:</strong>
              {{ selectedEvent.hours }}
            </span>
            <span class="card-text">
              <strong>Type:</strong>
              {{ selectedEvent.type }}
            </span>
          </div>

          <div class="d-flex flex-column align-items-center">
            <p class="card-text">
              <strong>Quantity: </strong>
              <i @click="removeTickets" class="bi bi-dash-square-fill"></i>
              {{ ticketsNumber }}
              <i @click="addMoreTickets" class="bi bi-plus-square-fill"></i>
            </p>
          </div>

          <div class="d-flex flex-column align-items-end">
            <p class="card-text">
              <strong>Total Price:</strong>
              {{ totalPrice() }} €
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-end mt-3">
      <router-link to="/profile">
        <button v-if="selectedEvent" @click="payEventTicket(selectedEvent.id)" class="btn btn-dark">
          Pai
        </button>
      </router-link>
    </div>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticketsNumber: 1,
    };
  },
  props: {
    selectedEvent: Object,
    message: String,
  },
  methods: {
    payEventTicket(idEvent) {
      if (this.ticketsNumber > 0) {
        this.$emit("pay-event", idEvent, this.ticketsNumber);
      }
    },
    addMoreTickets() {
      this.ticketsNumber++;
    },
    removeTickets() {
      if (this.ticketsNumber > 0) {
        this.ticketsNumber--;
      }
    },
    totalPrice() {
      return this.ticketsNumber * this.selectedEvent.price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
