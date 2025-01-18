<template>
  <div class="container my-4 w-75">
    <div class="background-rectangle"></div>
    <div class="row search-query mb-4 position-relative">
      <div class="col-12 d-flex justify-content-end">
        <div class="input-group w-25">
          <input
            type="text"
            v-model="searchQuery"
            class="form-control"
            placeholder="Search..."
          />
          <button class="btn btn-search" @click="filterEvents">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card card-day text-white">
          <div class="card-body text-center">
            <h5 class="card-title m-0">FRIDAY</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card card-day text-white">
          <div class="card-body text-center">
            <h5 class="card-title m-0">SATURDAY</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card card-day text-white">
          <div class="card-body text-center">
            <h5 class="card-title m-0">SUNDAY</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="row event-card">
      <div v-for="event in store.events" :key="event.id" class="col-md-4 mb-4">
        <div
          class="card h-100"
          v-show="
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.type.toLowerCase().includes(searchQuery.toLowerCase())
          "
        >
          <div class="card-body d-flex flex-column">
            <span class="card-text card-hours mb-1"> {{ event.hours }}</span>
            <h4>
              <i class="card-title">{{ event.name }}</i>
            </h4>
            <div class="d-flex flex-column flex-grow-1">
              <span class="card-text card-type mb-1">{{ event.type }}</span>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="card-text card-seats mb-1 semi-bold"><strong>Seats Available: </strong>{{ event.availableSeats }}</span>
                <router-link
                  :to="{ name: 'payment', params: { idEvent: event.id } }"
                >
                  <i class="bi bi-plus-square-fill text-black fs-4 icon-hover"></i>
                </router-link>
              </div>
            </div>
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

.background-rectangle {
  position: absolute;
  top: 7rem;
  left: 0;
  width: 100%;
  height: 15rem;
  background-color: #dcdcf2;
  z-index: -1; 
}

.search-query{
  margin-top: 10rem;
}

.card-day{
  padding: 0.8rem 1rem; 
  background-color: #b84eff;
}

.icon-hover {
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-hover:hover {
  color: #b84eff !important;
  transform: scale(1.2);
}

.card-day .card-title{
  font-size: 1.7rem;
}

.semi-bold{
  font-weight: 300;
}

.card-type{
  font-weight: 500;
  padding-bottom: 4rem;
}

.input-group .btn-search {
  background-color: white;
  color: black;
  border: 1px solid #ced4da;
}

</style>
