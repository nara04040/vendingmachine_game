export default class Product {
  constructor() {
    this.items = {};
  }

  add(item) {
    if (this.items[item.name]) {
      this.items[item.name] = {
        price: item.price,
        quantity: this.items[item.name].quantity + item.quantity,
      };
      return;
    }

    this.items[item.name] = { price: item.price, quantity: item.quantity };
  }

  getProductList() {
    return this.items;
  }
}
