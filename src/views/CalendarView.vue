<template>
      
    
  <span class="display-4 ms-3"> Calendar</span>
  <div class="container my-4 w-75">
    <div class="row mb-4">
      <div class="col-12 d-flex justify-content-end">
        <div class="input-group w-25">
          <input
            type="text"
            v-model="searchQuery"
            class="form-control"
            placeholder="Search events..."
          />
          <button class="btn btn-dark" @click="filterEvents">Search</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card text-white" style="background-color: #b84eff">
          <div class="card-body text-center">
            <h5 class="card-title m-0">Friday</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card text-white" style="background-color: #b84eff">
          <div class="card-body text-center">
            <h5 class="card-title m-0">Saturday</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card text-white" style="background-color: #b84eff">
          <div class="card-body text-center">
            <h5 class="card-title m-0">Sunday</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-for="event in store.events" :key="event.id" class="col-md-4 mb-4">
        <div
          class="card"
          v-show="
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.type.toLowerCase().includes(searchQuery.toLowerCase())
          "
        >
          <div class="card-body">
            <h4>
            <i class="card-title ">{{ event.name }}</i>
          </h4>
            <div class="d-flex flex-column">
              <span class="card-text mb-1">Type: {{ event.type }}</span>
              <span class="card-text mb-1">Hours: {{ event.hours }}</span>
              <span class="card-text mb-1"
                >Seats Available: {{ event.availableSeats }}</span
              >
            </div>
          </div>
          <div class="text-end me-2 mb-2">
            <router-link
              :to="{ name: 'payment', params: { idEvent: event.id } }"
            >
              <i class="bi bi-plus-square-fill text-black fs-4"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useEventsStore } from "@/stores/events";

export default {
  data() {
    return {
      searchQuery: "",
      store: useEventsStore(),
    };
  },
};
</script>

<style scoped>
.card {
  background-color: rgba(184, 78, 255, 0.2);
}
</style>
