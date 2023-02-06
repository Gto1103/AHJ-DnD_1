export default class StateService {
  getCards() {
    const data = JSON.parse(localStorage.getItem('cards'));
    return data || [];
  }

  saveCards(data) {
    localStorage.setItem('cards', JSON.stringify(data));
  }
}
