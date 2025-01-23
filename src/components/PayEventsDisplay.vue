<template>
  <div
    class="container my-4 d-flex align-items-center justify-content-center mb-5"
  >
    <div v-if="selectedEvent" class="card w-75">
      <div class="card-body">
        <div
          class="d-flex justify-content-around align-items-center justify-content-center"
        >
          <div class="event-image"></div>
          <div class="d-flex flex-column">
            <span class="card-title fw-bold fs-3">{{
              selectedEvent.name
            }}</span>
            <span class="card-text event-info"
              ><i>Hours: </i>{{ selectedEvent.hours }}</span
            >
            <span class="card-text event-info type"
              ><i>Type: </i>{{ selectedEvent.type }}</span
            >
            <span class="card-text event-info type"
              ><i>Day: </i>{{ selectedEvent.day }}</span
            >
          </div>
          <div class="d-flex flex-column align-items-center quantity">
            <p class="card-text">
              <strong>Quantity: </strong>
            </p>
            <div>
              <i @click="removeTickets" class="bi bi-dash-square-fill fs-6"></i>
              {{ ticketsNumber }}
              <i
                @click="addMoreTickets"
                class="bi bi-plus-square-fill fs-6"
              ></i>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center total-price">
            <p class="card-text">
              <strong>Total Price:</strong>
            </p>
            <p class="card-text price">{{ totalPrice() }} €</p>
          </div>
        </div>

        <div class="d-flex justify-content-center mt-5">
          <router-link to="/profile">
            <button
              style="background-color: #b84eff; color: white"
              v-if="selectedEvent"
              @click="payEventTicket(selectedEvent.id)"
              class="btn fs-5"
            >
              Pay
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mt-3"></div>
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

<style lang="scss" scoped>
.container {
  max-width: 2000px;
  margin: 0;
}

.card {
  padding: 0.8rem;
  background-color: #f1dcff;
}

.card-body {
  padding: 16px;
}

.img-fluid {
  height: 15rem;
  width: 10rem;
}

.card-title {
  color: #000;
  font-size: 1.5rem;
  margin-left: -10rem;
}

.card-text {
  color: #333;
  font-size: 1.1rem;
}

.event-info {
  margin-left: -10rem;
}

.quantity {
  font-size: 1.5rem;
}

.total-price {
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.price {
  font-size: 1.3rem;
}

.btn-dark {
  background-color: #b84eff;
  border-color: #b84eff;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem 3.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-dark:hover {
  background-color: #a64edb;
  transform: scale(1.1);
}
</style>
