import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({
    events: [
      {
        id: 1,
        name: "Rhythm of the Streets",
        type: "Breakdance show",
        hours: "10:00 AM - 10:45 AM",
        day: "Friday",
        price: 15,
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 2,
        name: "Urban Flow",
        type: "Hip-Hop show",
        hours: "11:15 AM - 12:00 AM",
        day: "Friday",
        price: 15,
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 3,
        name: "Caribbean Heat",
        type: "Salsa show",
        hours: "10:00 AM - 10:45 AM",
        day: "Saturday",
        price: 15,
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 4,
        name: "Beats of the Heart",
        type: "Bachata show",
        hours: "11:15 AM - 12:00 AM",
        day: "Saturday",
        price: 15,
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 5,
        name: "Dream on Pointe",
        type: "Ballet show",
        hours: "10:00 AM - 10:45 AM",
        day: "Sunday",
        price: 15,
        totalSeats: 78,
        availableSeats: 78,
      },
      {
        id: 6,
        name: "Infinite Movements",
        type: "Contemporary show",
        hours: "11:15 AM - 12:00 AM",
        day: "Sunday",
        price: 15,
        totalSeats: 78,
        availableSeats: 78,
      },

      {
        id: 7,
        name: "Freestyle",
        type: "Urban dance workshop",
        hours: "14:00 PM - 15:30 PM",
        day: "Friday",
        price: 15,
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 8,
        name: "Popping & Locking",
        type: "Urban dance workshop",
        hours: "16:00 PM - 17:30 PM",
        day: "Friday",
        price: 15,
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 9,
        name: "Rumba",
        type: "Latin dance workshop",
        hours: "14:00 PM - 15:30 PM",
        day: "Saturday",
        price: 15,
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 10,
        name: "Bachata",
        type: "Latin dance workshop",
        hours: "16:00 PM - 17:30 PM",
        day: "Saturday",
        price: 15,
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 11,
        name: "Classic technique",
        type: "Classic dance workshop",
        hours: "14:00 PM - 15:30 PM",
        day: "Sunday",
        price: 15,
        totalSeats: 23,
        availableSeats: 23,
      },
      {
        id: 12,
        name: "Improvisation contemporary",
        type: "Classic dance workshop",
        hours: "16:00 PM - 17:30 PM",
        day: "Sunday",
        price: 15,
        totalSeats: 23,
        availableSeats: 23,
      },
    ],
  }),
  actions: {
    buyIndividualEvent(eventId, quantity) {
      const event = this.events.find((e) => e.id === eventId);
      if (event && event.availableSeats >= quantity) {
        event.availableSeats -= quantity;
        return true;
      }
      return false;
    },
  
    editEvent(eventId, name, type, price, seats) {
      const selectedEvent = this.events.find((e) => e.id === eventId);
      if (selectedEvent) {
        selectedEvent.name = name;
        selectedEvent.type = type;
        selectedEvent.price = price;
        selectedEvent.totalSeats = seats;
        selectedEvent.availableSeats = seats; 
      }
    },
  
    removeSeatsByShows(quantity, day) {
      const selectedShows = this.events.filter(
        (e) => e.type.toLowerCase().includes("show") && e.day === day
      );
      if (selectedShows.length > 0) {
        selectedShows.forEach((s) => (s.availableSeats -= quantity));
        return true;
      }
      return false;
    },
  
    removeSeatsByWorkshops(quantity, day) {
      const selectedWorkshops = this.events.filter(
        (e) => e.type.toLowerCase().includes("workshop") && e.day === day
      );
      if (selectedWorkshops.length > 0) {
        selectedWorkshops.forEach((s) => (s.availableSeats -= quantity));
        return true;
      }
      return false;
    },
  
    removeSeatsByDay(quantity, day) {
      const selectedEvents = this.events.filter((e) => e.day === day);
      if (selectedEvents.length > 0) {
        selectedEvents.forEach((e) => (e.availableSeats -= quantity));
        return true;
      }
      return false;
    },
  },

  persist: {
    storage: sessionStorage,
    pick: ["events"],
  },
});
