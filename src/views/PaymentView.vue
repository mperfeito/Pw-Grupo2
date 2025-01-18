<template>
  <div class="page-container">
    <PacksDisplay
      :slectedDay="selectedDay"
      :selectedPack="selectedPack"
      @pay-pack-1="payPack1"
      @pay-pack-2="payPack2"
      @pay-pack-3="payPack3"
      @pay-pack-4="payIndividualTicket"
      :message="packMessage"
    ></PacksDisplay>
    <EventsDisplay
      :selectedEvent="selectedEvent"
      @pay-event="payIndividualTicket"
      :message="ticketMessage"
    ></EventsDisplay>
    <div class="payment-container">
      <div class="payment-details">
        <h2>Payment Details</h2>
        <p>Complete your purchase and secure your spot today!</p>
        <form>
          <div class="mb-2">
            <label for="email" class="form-label">Email Address</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-envelope"></i></span>
              <input type="email" class="form-control" id="email" placeholder="Enter your email">
            </div>
          </div>
          <div class="mb-2">
            <label for="cardholder" class="form-label">Card Holder</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-person"></i></span>
              <input type="text" class="form-control" id="cardholder" placeholder="Enter your name">
            </div>
          </div>
          <div class="mb-2">
            <label for="cardnumber" class="form-label">Card Detail</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-credit-card"></i></span>
              <input type="text" class="form-control" id="cardnumber" placeholder="Card Number                                                                                                                           MM/YY      CVC">
            </div>
          </div>
        </form>
      </div>
  
      <div class="order-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: <span>55,00€</span></p>
        <p>Taxes: <span>3,00€</span></p>
        <hr />
        <p>Total: <span>58,00€</span></p>
        <!-- <button class="pay-button">PAY</button> -->
        <div class="secure-payment">
          <img src="../assets/payment/certificado-ssl 2.png" alt="Secure Icon" class="secure-icon">
          <span>Secure payment with SSL encryption</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useEventsStore } from "@/stores/events";
import { useTicketsStore } from "@/stores/tickets";
import PacksDisplay from "@/components/PayPacksDisplay.vue";
import EventsDisplay from "@/components/PayEventsDisplay.vue";
import { useUsersStore } from "@/stores/users";

export default {
  components: {
    PacksDisplay,
    EventsDisplay,
  },
  data() {
    return {
      eventId: null,
      packId: null,
      eventsStore: useEventsStore(),
      ticketsStore: useTicketsStore(),
      usersStore: useUsersStore(),
      selectedEvent: null,
      selectedPack: null,
      selectedDay: "",
      ticketMessage: "",
      packMessage: "",
    };
  },
  mounted() {
    this.eventId = this.$route.params.idEvent;
    this.selectedEvent = this.eventsStore.events.find(
      (e) => e.id === Number(this.eventId)
    );
    this.packId = this.$route.params.idPack;
    this.selectedPack = this.ticketsStore.tickets.find(
      (t) => t.id === Number(this.packId)
    );
    this.selectedDay = this.ticketsStore.selectedDay;
  },

  methods: {
    payPack1(idPack, quantity) {
      let success = false;
      if (idPack === 1) {
        success = this.eventsStore.removeSeatsByShows(
          quantity,
          this.selectedDay
        );
        this.ticketsStore.buyTicket(idPack, quantity);
      }
      if (success) {
        this.packMessage =
          "Your tickets have been purchased successfully! Thank you.";
    
        if (this.usersStore.currentUser) {
          const purchasedTicket = {
            id: idPack,
            name: this.selectedPack.name,
            type: this.selectedPack.type,
            hours: this.selectedPack.hours,
            quantity: quantity,
            price: this.selectedPack.price,
          };
          this.usersStore.currentUser.tickets.push(purchasedTicket);
        }
      } else {
        this.packMessage = "Purchase failed";
      }
    },

    payPack2(idPack, quantity) {
      let success = false;
      if (idPack === 2) {
        success = this.eventsStore.removeSeatsByWorkshops(
          quantity,
          this.selectedDay
        );
        this.ticketsStore.buyTicket(idPack, quantity);
      }
      if (success) {
        this.packMessage =
          "Your tickets have been purchased successfully! Thank you.";
      
        if (this.usersStore.currentUser) {
          const purchasedTicket = {
            id: idPack,
            name: this.selectedPack.name,
            type: this.selectedPack.type,
            hours: this.selectedPack.hours,
            quantity: quantity,
            price: this.selectedPack.price,
          };
          this.usersStore.currentUser.tickets.push(purchasedTicket);
        }
      } else {
        this.packMessage = "Purchase failed";
      }
    },

    payPack3(idPack, quantity) {
      let success = false;
      if (idPack === 3) {
        success = this.eventsStore.removeSeatsByDay(quantity, this.selectedDay);
        this.ticketsStore.buyTicket(idPack, quantity);
      }
      if (success) {
        this.packMessage =
          "Your tickets have been purchased successfully! Thank you.";
       
        if (this.usersStore.currentUser) {
          const purchasedTicket = {
            id: idPack,
            name: this.selectedPack.name,
            type: this.selectedPack.type,
            hours: this.selectedPack.hours,
            quantity: quantity,
            price: this.selectedPack.price,
          };
          this.usersStore.currentUser.tickets.push(purchasedTicket);
        }
      } else {
        this.packMessage = "Purchase failed";
      }
    },

    payIndividualTicket(idEvent, quantity) {
      let success = false;
      success = this.eventsStore.buyIndividualEvent(idEvent, quantity);
      if (success) {
        this.ticketMessage =
          "Your tickets have been purchased successfully! Thank you.";
     
        if (this.usersStore.currentUser) {
          const purchasedTicket = {
            id: idEvent,
            name: this.selectedEvent.name,
            type: this.selectedEvent.type,
            hours:this.selectedEvent.hours,
            quantity: quantity,
            price: this.selectedEvent.price,
          };
          this.usersStore.currentUser.tickets.push(purchasedTicket);
        }
      } else {
        this.ticketMessage = "Purchase failed";
      }

  
      const pack = this.ticketsStore.tickets.find((t) => t.id === 4);
      if (pack) {
        pack.availableTickets -= quantity;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.page-container{
  margin: 4rem 0;
  width: 100%;
}

.payment-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  margin: 0; 
  padding: 0;
}

.payment-details{
  width: 48%;
  margin-left: 2rem;
}

.order-summary {
  width: 48%;
}

.payment-details h2 {
  font-size: 26px;
  margin-bottom: 10px;
  font-weight: 700;
}

.payment-details p {
  margin-bottom: 40px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
}

.input-group-text {
  background-color: #dcdcf2;
  border: 1px solid #ced4da;
  border-right: none;
  border-radius: 0.5rem 0 0 0.5rem; 
  color: #000;
  font-size: 1.7rem;
}

.form-control {
  border: 1px solid #ced4da;
  border-left: none;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: #dcdcf2;
  padding: 0.75rem; 
}

.form-control::placeholder {
  color: #6c757d;
}

.order-summary {
  background-color: #8A89D4;
  padding:2.3rem;
}

.order-summary h2 {
  font-size: 25px;
  margin-bottom: 2.3rem;
  color: #fff;
}

.order-summary p {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #fff;
}

.order-summary hr {
  margin: 20px 0;
  color: #fff;
}

.pay-button {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
}

.secure-payment {
  margin-top: 1.2rem;
  font-size: 0.94rem;
  display: flex;
  align-items: center;
  color: #fff;
}

.secure-icon {
  margin-right: 1.1rem; 
  width: 2.3rem; 
  height: 2.2rem; 
}

</style>
