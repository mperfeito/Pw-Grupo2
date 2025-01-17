<template>
  <div class="d-flex">
    <SideBarAdmin @change-content="setContent"></SideBarAdmin>
    <div class="flex-grow-1 d-flex justify-content-center align-items-center">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import SideBarAdmin from "@/components/SideBarAdmin.vue";
import UsersTable from "@/components/UsersTable.vue";
import EventsTable from "@/components/EventsTable.vue";
import TicketsTable from "@/components/TicketsTable.vue";
import NotfForm from "@/components/NotfForm.vue";

export default {
  components: {
    SideBarAdmin,
    UsersTable,
    EventsTable,
    TicketsTable,
    NotfForm,
  },
  data() {
    return {
      currentComponent: "UsersTable",
    };
  },
  methods: {
    setContent(contentType) {
      switch (contentType) {
        case "users":
          this.currentComponent = "UsersTable";
          break;
        case "events":
          this.currentComponent = "EventsTable";
          break;
        case "tickets":
          this.currentComponent = "TicketsTable";
          break;
        case "notifications":
          this.currentComponent = "NotfForm";
          break;
        default:
          this.currentComponent = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
