// Open–closed principle
// software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

// In simpler terms, you should be able to add new functionality to existing code without altering its source.

class Order {
  constructor(items) {
    this.items = items;
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

// Create new class which is DiscountedOrder, extends the Order class and extend discount argument in order to avoid modify Order class
class DiscountedOrder extends Order {
  constructor(items, discount) {
    super(items);
    this.discount = discount;
  }

  applyDiscount() {
    return this.calculateTotal() * (1 - this.discount / 100);
  }
}

const items = [{ price: 100 }, { price: 200 }];

const order = new Order(items);

const discountedOrder = new DiscountedOrder(items, 20);

console.log(order.calculateTotal());
console.log(discountedOrder.applyDiscount());
