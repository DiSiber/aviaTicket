import { getSelectInstance} from '../plugins/materialize'

class FavTicketUI {
  constructor(selectInst) {
    this.favArr={};
    this.i=0;
    this.favSelect = document.querySelector('.fav-select .select-wrapper ul');
    // this.favSelectInst = selectInst(this.favSelect);
  }

  addToFavList() {
    const favIcon = document.querySelectorAll(".ticket-favourite");
    // const card = document.querySelectorAll('.ticket-card');
    favIcon.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        icon.offsetParent.classList.toggle("is-fav");
        if (icon.offsetParent.classList.contains("is-fav")) {
          this.addToFav(icon);
          this.i++;
        } else this.delFromFav(icon);
        // console.log(this.favArr);
        this.renderFavList();
      });
    });
  }

  addToFav(icon) {
    icon.textContent = "star";
    icon.offsetParent.style.backgroundColor = "#f7e8e8";
    this.favArr[this.i] = icon.offsetParent;
  }

  delFromFav(icon) {
    icon.textContent = "star_border";
    icon.offsetParent.style.backgroundColor = "#fff";
    Object.entries(this.favArr).forEach((val) => {
      if (val[1] === icon.offsetParent) {
        delete this.favArr[val[0]];
      }
    });
  }

  renderFavList(){
    let frag = '';
    Object.entries(this.favArr).forEach(([,el])=>{
      const air_name=el.children[1].innerText;
      const time_price=el.children[3].innerText.split('\n');
      frag = FavTicketUI.favListTemplate(air_name,time_price);
    })
    // console.log(this.favSelect);
    this.favSelect.insertAdjacentHTML('beforeend', frag);
  }

  static favListTemplate(air,[time,price]){
    return `
    <li id="select-options-${air}" tabindex="0"><span>${time},<br>${price}</span></li>
    `
  }
}

const favTicket = new FavTicketUI(getSelectInstance);

export default favTicket;
