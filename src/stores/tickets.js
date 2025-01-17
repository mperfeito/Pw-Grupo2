import { defineStore } from "pinia";

export const useTicketsStore = defineStore("tickets", {
  state: () => ({
    tickets: [
      {
        id: 1,
        name: "Pack 1 - Shows",
        type:'Available for all the shows',
        hours:"10:00 AM - 12:00 AM",
        image: "",
        price: 55,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 2,
        name: "Pack 2 - Workshops",
        type:'Available for all the workshops',
        hours:"14:00 AM - 17:30 AM",
        image: "",
        price: 55,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 3,
        name: "Pack 3 - Full Day",
        type:'Available for all events of the day',
        hours:"10:00 AM - 17:30 AM",
        image: "",
        price: 48,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 4,
        name: "Pack 4 - Individual",
        type:'Only available for one event',
        hours:"Depends on the event",
        image: "",
        price: 15,
        profit:0,
        totalTickets: 100,
        availableTickets: 100,
      },
    ],
    selectedDay: "",
  }),

  actions: {
    buyTicket(ticketId, quantity) {
      const ticket = this.tickets.find((t) => t.id === ticketId);
      if (ticket && ticket.availableTickets > 0) {
        ticket.availableTickets -= quantity;
      }
    },

    editPack() {
      const selectedPack = this.store.tickets.find(
        (t) => t.id === this.selectedId
      );

      if (selectedPack) {
        if (this.name && this.name !== selectedPack.name) {
          selectedPack.name = this.name;
        }
        if (this.price && this.price !== selectedPack.price) {
          selectedPack.price = this.price;
        }
        if (this.number && this.number !== selectedPack.totalTickets) {
          selectedPack.totalTickets = this.number;
        }
      }
    },

    setSelectedDay(day) {
      this.selectedDay = day;
    },
   
  },
  persist: {
    storage: sessionStorage,
    pick: ["tickets"],
  },
});
