<template>
  <div class="container my-4">
    <div v-if="selectedPack" class="card">
      <div class="card-body">
        <h2 class="card-title  mb-4">{{ selectedPack.name }}</h2>
        <div >
          <p class="card-text text-center mb-3">
            <strong>Total Price:</strong>
            {{ totalPrice() }} €
          </p>
          <p class="card-text text-center mb-3">
            <strong>Quantity:</strong>
            <i @click="addPacks" class="bi bi-plus-square-fill"></i>
            {{ packsNumber }}
            <i @click="removePacks" class="bi bi-dash-square-fill"></i>
          </p>
          <p class="text-center mb-3">
            <strong>Day:</strong>
            {{ store.selectedDay }}
          </p>
          <router-link to="/profile">
          <button v-if="selectedPack" @click="payPack(selectedPack.id)" class="btn btn-dark">
            Pay
          </button>
        </router-link>
        </div>
      </div>
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

<style lang="scss" scoped></style>
