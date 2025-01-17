<template>
    
  <span class="display-4 ms-3">Packs</span>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 mb-5" v-for="t in store.tickets" :key="t.id">
        <div
          class="card h-100 position-relative"
          style="background-color: rgba(184, 78, 255, 0.2)"
        >
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-3"> <i>{{ t.name }}</i></h5>
            <span class="card-text mb-1"><strong>Price:</strong> {{ t.price }} €</span>
            <span class="card-text mb-1"><strong>Packs available:</strong> {{ t.availableTickets }}</span>
            <span class="card-text mb-1"><strong>Hours:</strong> {{ t.hours }}</span>
            <span class="card-text"><strong>Type:</strong> {{ t.type }}</span>
            
            <div class="d-flex position-absolute bottom-0 end-0 m-2">
              <div class="dropdown me-2">
                <button
                  v-if="t.id !== 4"
                  class="btn btn-outline-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                class="btn btn-dark"
              >
                Pay
              </button>

              <router-link v-if="t.id == 4" :to="{ name: 'calendar' }">
                <button class="btn btn-outline-dark">See calendar</button>
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
.card {
  background-color: rgba(184, 78, 255, 0.2);
}
.error-message {
  display: block;
  margin-top: 6px;
  color: red;
  text-align: right;
}
</style>
