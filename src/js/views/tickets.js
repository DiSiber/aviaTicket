import currencyUI from "./currency";
import favTicket from '../store/favourites'

class TicketUI {
  constructor(currency, favTicket) {
    this.container = document.querySelector(".tickets-section .row");
    this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
    this.favTicket = favTicket;
  }

  renderTickets(tickets) {
    this.clearContainer();

    if (!tickets.length) {
      this.showEmptyMsg();
      return;
    }

    let fragment = "";
    const currencySymbol = this.getCurrencySymbol();

    tickets.forEach((ticket) => {
      const template = TicketUI.ticketTemplate(ticket, currencySymbol);
      fragment += template;
    });

    this.container.insertAdjacentHTML("afterbegin", fragment);
    this.favTicket.addToFavList();
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  showEmptyMsg() {
    const template = TicketUI.emptyMsgTemplate();
    this.container.insertAdjacentHTML("afterbegin", template);
  }

  static emptyMsgTemplate() {
    return `
      <div class="tickets-empty-res-msg">
        There is no tickets on your options.
      </div>
    `;
  }

  static ticketTemplate(ticket, currency) {
    return `
      <div class="col s12 m6">
        <div class="card ticket-card">
          <i class="small material-icons ticket-favourite">star_border</i>
          <div class="ticket-airline d-flex align-items-center">
            <img src="${ticket.airline_logo}" alt="" class="ticket-airline-img">
            <span class="ticket-airline-name">${ticket.airline_name}</span>
          </div>
          <div class="ticket-destination d-flex align-items-center">
            <div class="d-flex align-items-center mr-auto">
              <span class="ticket-city">${ticket.origin_name}</span>
              <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
              <i class="medium material-icons">flight_land</i>
              <span class="ticket-city">${ticket.destination_name}</span>
            </div>
          </div>
          <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">${ticket.departure_at}</span>
            <span class="ticket-price ml-auto">${currency} ${ticket.price}</span>
          </div>
          <div class="ticket-additional-info">
            <span class="ticket-transfers">Transfers: <b>${ticket.transfers}</b></span>
            <span class="ticket-flight-number">Flight number: <b>${ticket.flight_number}</b></span>
          </div>
        </div>
      </div>
    `;
  }
}

const ticketsUI = new TicketUI(currencyUI, favTicket);

export default ticketsUI;
