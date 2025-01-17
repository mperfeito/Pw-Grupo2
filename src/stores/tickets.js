import { defineStore } from "pinia";

export const useTicketsStore = defineStore("tickets", {
  state: () => ({
    tickets: [
      {
        id: 1, 
        image: "/src/assets/packs/pack1.png", 
        description: "Immerse yourself in the heart of the festival! With the Shows Pack, you’ll have exclusive access to the most exciting dance performances. Witness breathtaking choreography, captivating stories, and powerful performances that will leave you inspired and energized.",
        name: "Pack 1 - Shows",
        type:'Available for all the shows',
        hours:"10:00 AM - 12:00 AM",
        price: 55,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 2, 
        image: "/src/assets/packs/pack2.png", 
        description: "Take your skills to the next level! The Workshops Pack gives you access to a variety of classes led by world-class instructors. Whether you’re looking to improve your technique or try a new style, these hands-on workshops are the perfect opportunity to learn and grow as a dancer.",
        name: "Pack 2 - Workshops",
        type:'Available for all the workshops',
        hours:"14:00 AM - 17:30 AM",
        price: 55,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 3, 
        image: "/src/assets/packs/pack3.png", 
        description: "Experience the festival in its entirety! With the Full Day Pack, you’ll enjoy a full day of non-stop action, including access to both shows and workshops. Get the ultimate dance experience with a perfect blend of performances, learning, and inspiration—all in one package.",
        name: "Pack 3 - Full Day",
        type:'Available for all events of the day',
        hours:"10:00 AM - 17:30 AM",
        price: 48,
        profit:0,
        totalTickets: 70,
        availableTickets: 70,
      },
      {
        id: 4, 
        image: "/src/assets/packs/pack4.png", 
        description: "Craft your own festival journey! The Individual Pack lets you choose the specific activities that match your interests, whether it's a single workshop, a performance, or a combination. Tailor your experience and enjoy the festival at your own pace.",
        name: "Pack 4 - Individual",
        type:'Only available for one event',
        hours:"Depends on the event",
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
