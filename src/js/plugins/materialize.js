import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

// init select
const select = document.querySelectorAll("select");
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

// init autocomplete

const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);

export function getAutocompleteInstance(elem){
  return M.Autocomplete.getInstance(elem);
}

// init datepicker

const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker,{
  showClearBtn: true,
  format: 'yyyy-mm',
});

export function getDatepickerInstance(elem){
  return M.Datepicker.getInstance(elem);
}