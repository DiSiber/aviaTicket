class CurrencyUI{
  constructor(){
    this.currency = document.getElementById('currency')
    this.currencyDictionary = {
      USD: '$',
      EUR: '€',
    }
  }

  get currencyValue(){
    return this.currency.value;
  }

  getCurrencySymbol(){
    return this.currencyDictionary[this.currencyValue];
  }
}

const currencyUI = new CurrencyUI();

export default currencyUI;