<template>
  <div class="container my-5">
    <div class="column">
      <div
        class="col-md-3 mb-4"
        v-for="(t, index) in store.tickets"
        :key="t.id"
        style="width: fit-content"
      >
        <div
          class="card h-100"
          :style="{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            border: 'none',
          }"
        >
          <img
            :src="t.image"
            alt="Ticket Image"
            class="ticket-image animate-image"
            :style="{
              marginLeft: index % 2 === 0 ? '5%' : '5%',
              marginRight: index % 2 === 0 ? '5%' : '5%',
            }"
          />
          <div class="card-body d-flex flex-column">
            <span class="fs-1 fw-bold card-title mb-3"> {{ t.name }}</span>
            <span class="card-text mb-1 fs-4">{{ t.description }}</span>
            <div class="d-flex flex-column mt-5">
              <span class="card-text mb-1 fs-4"
                ><i>Price:</i> {{ t.price }} €</span
              >

              <span class="card-text mb-1 fs-4"
                ><i>Hours:</i> {{ t.hours }}</span
              >
              <span class="card-text fs-4"><i>Type:</i> {{ t.type }}</span>
            </div>
            <div class="button-container mt-5">
              <div class="dropdown me-2">
                <button
                  v-if="t.id !== 4"
                  class="btn fs-5 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="background-color: #b84eff; color: white"
                >
                  Select day
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      @click="store.setSelectedDay('Friday')"
                      class="dropdown-item"
                      href="#"
                      >Friday</a
                    >
                  </li>
                  <li>
                    <a
                      @click="store.setSelectedDay('Saturday')"
                      class="dropdown-item"
                      href="#"
                      >Saturday</a
                    >
                  </li>
                  <li>
                    <a
                      @click="store.setSelectedDay('Sunday')"
                      class="dropdown-item"
                      href="#"
                      >Sunday</a
                    >
                  </li>
                </ul>
              </div>

              <button
                v-if="t.id !== 4"
                @click="checkDay(t.id)"
                class="btn"
                style="border-color: #B84EFF; color: #B84EFF;"
              >
                Pay
              </button>

              <router-link v-if="t.id == 4" :to="{ name: 'calendar' }">
                <button class="btn fs-5 " style="background-color: #b84eff; color: white">See calendar</button>
              </router-link>
            </div>
          </div>
        </div>

        <span class="error-message" v-if="errorMessages[t.id]">
          {{ errorMessages[t.id] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useTicketsStore } from "@/stores/tickets.js";
export default {
  data() {
    return {
      selectedDay: "",
      store: useTicketsStore(),
      errorMessages: {},
    };
  },

  methods: {
    checkDay(ticketId) {
      if (this.store.selectedDay === "") {
        this.errorMessages[ticketId] =
          "Please select a day before proceeding ...";
      } else {
        this.errorMessages[ticketId] = null;
        this.$router.push({ name: "payment", params: { idPack: ticketId } });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error-message {
  display: block;
  margin-top: 6px;
  color: red;
  text-align: right;
  font-size: 20px;
}

* {
  font-family: "Ysabeau Infant";
}

.card-title {
  font-size: 50px;
  font-weight: bold;
}
.card-text {
  font-size: 25px;
}
.card-body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  flex-direction: row;
 
  
}

.ticket-image {
  height: 400px;
  margin: 5%;
  padding-right: 10%;
}

.animate-image {
  animation: move 1s linear infinite;
}

.animate-image:hover {
  animation-play-state: paused;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(20px);
  }
  150% {
    transform: translateX(0);
  }
}
</style>
