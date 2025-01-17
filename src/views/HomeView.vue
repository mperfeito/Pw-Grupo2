<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Homepage</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link to="/about-us">
            <a class="nav-link active">About Us</a>
          </router-link>
          <router-link to="/calendar">
            <a class="nav-link active"> Calendar</a>
          </router-link>
          <router-link to="/packs">
            <a class="nav-link active"> Packs</a>
          </router-link>
          <router-link to="/workshops">
            <a class="nav-link active"> Workshops </a>
          </router-link>
          <router-link to="/shows">
            <a class="nav-link active"> Shows </a>
          </router-link>
          <router-link to="/profile">
            <a class="nav-link active"> Profile </a>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <div
    class="container-fluid my-4 position-relative"
    style="height: 300px; background-color: #b84eff"
  >
    <router-link to="/packs">
      <button
        class="btn btn-dark position-absolute bottom-0 end-0 m-3"
        @click="showModal()"
      >
        Tickets
      </button>
    </router-link>
  </div>
  <div
    class="container-fluid position-relative"
    style="height: 300px; background-color: #b84eff"
  >
    <router-link to="/calendar">
      <button
        class="btn btn-dark position-absolute bottom-0 end-0 m-3"
        @click="showModal()"
      >
        Calendar
      </button>
    </router-link>
  </div>
  <div
    class="container-fluid position-relative my-4"
    style="height: 300px; background-color: #b84eff"
  >
  <router-link to="/workshops">
    <button
      class="btn btn-dark position-absolute bottom-0 end-0 m-3"
      @click="showModal()"
    >
      See More
    </button>
  </router-link>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
