<template>
  <div class="container my-4">
    <div v-if="selectedPack" class="card">
      <div class="card-body">
        <div class="d-flex justify-content-around mb-3 align-items-center">
          <div class="pack-image">
            <img src="../assets/payment/pack-ticket.png" alt="Pack Image" class="img-fluid">
          </div>
          <div class="d-flex flex-column align-items-start">
            <h2 class="card-title">{{ selectedPack.name }}</h2>
            <div style="height: 7rem;"></div>
            <p class="card-text">
              <strong>Day:</strong>
              {{ store.selectedDay }}
            </p>
          </div>
          <div class="d-flex flex-column align-items-center quantity">
            <p class="card-text">
              <strong>Quantity: </strong>
            </p>
            <div>
              <i @click="removePacks" class="bi bi-dash-square-fill"></i>
              {{ packsNumber }}
              <i @click="addPacks" class="bi bi-plus-square-fill"></i>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center total-price">
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
    <div class="text-end mt-3">
      <router-link to="/profile">
        <button v-if="selectedPack" @click="payPack(selectedPack.id)" class="btn btn-dark">
          Pay
        </button>
      </router-link>
    </div>
    <span>{{ message }}</span>
  </div>
</template>


<script>
import { useTicketsStore } from "@/stores/tickets.js";
export default {
  data() {
    return {
      store: useTicketsStore(),
      packsNumber: 1,
    };
  },
  props: {
    selectedPack: Object,
    selectedDay: String,
    message: String,
  },
  methods: {
    payPack(idPack) {
      if (this.packsNumber > 0) {
        if (idPack === 1) {
          this.$emit("pay-pack-1", idPack, this.packsNumber);
        } else if (idPack === 2) {
          this.$emit("pay-pack-2", idPack, this.packsNumber);
        } else   {
          this.$emit("pay-pack-3", idPack, this.packsNumber);
        } 
      }
    },
    addPacks() {
      this.packsNumber++;
    },
    removePacks() {
      if (this.packsNumber > 0) {
        this.packsNumber--;
      }
    },
    totalPrice() {
      return this.packsNumber * this.selectedPack.price;
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

.img-fluid{
  height: 15rem;
  width: 10rem,
}

.card-body {
  padding: 16px; 
}

.card-title {
  color: #000; 
  font-size: 1.5rem; 
}

.card-text {
  color: #333;
  font-size: 1.1rem;
}

.quantity {
  font-size: 1.5rem;
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
  background-color: #ff69b4;
  border-color: #ff69b4;
  color: #fff;
  font-size: 1.2rem;
}
</style>
