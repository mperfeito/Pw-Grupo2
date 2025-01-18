<template>
    
  <h1 class="label">Buy Your Ticket Now, choose one of our packs!</h1>
  <div class="container my-5" >
    <div class="column">
      <div
        class="col-md-3 mb-4"
        v-for="(t, index) in store.tickets"
        :key="t.id"
        style="width: fit-content;"
      >
        <div
          class="card h-100"
          :style="{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            border: 'none',
          }"
        >
          <img :src="t.image" alt="Ticket Image" class="ticket-image animate-image" :style="{
              marginLeft: index % 2 === 0 ? '5%' : '5%',
              marginRight: index % 2 === 0 ? '5%' : '5%',
            }  "/>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-3"> <i>{{ t.name }}</i></h5> 
            <span class="card-text mb-1">{{ t.description }}</span>
            <span class="card-text mb-1"><strong>Price:</strong> {{ t.price }} €</span>
            <span class="card-text mb-1"><strong>Packs available:</strong> {{ t.availableTickets }}</span>
            <span class="card-text mb-1"><strong>Hours:</strong> {{ t.hours }}</span>
            <span class="card-text"><strong>Type:</strong> {{ t.type }}</span>
            
            <div class="button-container mt-3">
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
                class="btn"
              >
                Pay
              </button>

              <router-link v-if="t.id == 4" :to="{ name: 'calendar' }">
                <button class="btn ">See calendar</button>
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
} 

* {
  font-family: "Ysabeau Infant";
}
.label {
  font-family: "Ysabeau Infant";
  font-weight: bolder;
  color: #000000;
  font-size: 50px;
  margin-top: 2%;
  margin: 5%;
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
  margin-top: auto; 
  gap: 10px; 
}

.btn {
  border: none;
  background-color: #b84eff;
  color: white;
  border-radius: 10px; 
  font-size: 25px;
  font-weight: 400;
  width: fit-content;
  height: fit-content;
  text-transform: uppercase;
  font-family: "Ysabeau Infant";
  text-decoration: none;
  transition: transform 0.3s ease;
} 

.btn:hover {
  transform: scale(1.1);
  padding: 1.5%;
}

.ticket-image {
  height: 490px;
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
