module.exports = class Product {
  constructor(name, descrption, price, inStock = 0) {
    this.name = name;
    this.descrption = descrption;
    this.price = price;
    this.inStock = inStock;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }
  removeToStock(quantity) {
    this.inStock -= quantity;
  }
};
