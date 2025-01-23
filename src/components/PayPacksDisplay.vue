<template>
  <div
    class="container my-4 d-flex align-items-center justify-content-center mb-5"
  >
    <div v-if="selectedPack" class="card w-75">
      <div class="card-body">
        <div
          class="d-flex justify-content-around mb-3 align-items-center justify-content-center"
        >
          <div class="pack-image">
            <img :src="selectedPack.image" alt="Pack Image" class="img-fluid" />
          </div>
          <div class="d-flex flex-column">
            <span class="card-title fw-bold fs-3">{{ selectedPack.name }}</span>
            <span class="card-title fs-5">
              <i>Hours: </i>{{ selectedPack.hours }}</span
            >
            <span class="card-title fs-5">
              <i>Type: </i>{{ selectedPack.type }}</span
            >
            <span class="card-title fs-5">
              <i>Day: </i>{{ store.selectedDay }}</span
            >
          </div>
          <div class="d-flex flex-column align-items-center quantity">
            <p class="card-text">
              <strong class="fs-5">Quantity: </strong>
            </p>
            <div>
              <i @click="removePacks" class="bi bi-dash-square-fill fs-6"></i>
              {{ packsNumber }}
              <i @click="addPacks" class="bi bi-plus-square-fill fs-6"></i>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center total-price">
            <p class="card-text">
              <strong class="fs-5">Total Price:</strong>
            </p>
            <p class="card-text price fs-5">{{ totalPrice() }} €</p>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <router-link to="/profile">
            <button
              style="background-color: #b84eff; color: white"
              v-if="selectedPack"
              @click="payPack(selectedPack.id)"
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
        } else {
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

.img-fluid {
  height: 15rem;
  width: 10rem;
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

.btn-dark {
  background-color: #ff69b4;
  border-color: #ff69b4;
  color: #fff;
  font-size: 1.2rem;
}
</style>
