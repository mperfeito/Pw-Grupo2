<template>
  <div class="container my-4">
    <div v-if="selectedEvent" class="card">
      <div class="card-body">
        <div class="d-flex justify-content-around mb-3 align-items-center">
          <div class="event-image">
            <img src="../assets/payment/ticket.png" alt="Event Image" class="img-fluid">
          </div>
          <div class="d-flex flex-column">
            <h2 class="card-title">{{ selectedEvent.name }}</h2>
            <span class="card-text event-info">
              {{ selectedEvent.hours }}
            </span>
            <div style="height: 8rem;"></div>
            <span class="card-text event-info type">
              <strong>{{ selectedEvent.type }}</strong>
            </span>
          </div>
          <div class="d-flex flex-column align-items-center quantity">
            <p class="card-text">
              <strong>Quantity: </strong>
            </p>
            <div>
              <i @click="removeTickets" class="bi bi-dash-square-fill"></i>
              {{ ticketsNumber }}
              <i @click="addMoreTickets" class="bi bi-plus-square-fill"></i>
            </div>
          </div>
          <div class="d-flex flex-column align-items-end total-price">
            <p class="card-text">
              <strong>Total Price:</strong>
            </p>
            <p class="card-text price">
              {{ totalPrice() }} €
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 d-flex justify-content-center">
      <router-link to="/profile">
        <button v-if="selectedEvent" @click="payEventTicket(selectedEvent.id)" class="btn btn-dark">
          PAY
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

.img-fluid{
  height: 15rem;
  width: 10rem,
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

.event-info{
  margin-left: -10rem;
}

.quantity{
  font-size: 1.5rem;
}

.total-price{
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.price{
  font-size: 1.3rem;
}

.bi-dash-square-fill, .bi-plus-square-fill {
  font-size: 1.5rem; 
  cursor: pointer; 
  transition: transform 0.3s ease, color 0.3s ease;
}

.bi-dash-square-fill:hover, .bi-plus-square-fill:hover {
  color: #b84eff;
  transform: scale(1.2);
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