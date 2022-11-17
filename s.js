// Single responsibility principle

class Order {
  constructor(userId) {
    this.userId = userId
    this.timeOrder = Date.now()
    this.products = []

  }
}

class sendOrder {
  sendOrder(order) {
    console.log(`Sending to server::`, order)
    return 1
  }
}

class OrderManager {
  constructor() {
    this.order = null
  }
  // create order

  createOder(userId) {
    this.order = new Order(userId)
    return this.order
  }

  // add product
  addProduct(product) {
    this.order.products.push(product)
  }

  // get order
  getOrder() {
    return this.order
  }

  // is valid
  verifyValid() {
    return Boolean(this.order.products.length > 0)
  }

  // send order
  sendOrder() {
    const isValid = this.verifyValid()
    if (isValid) {
      this.orderSendMail = new sendOrder()
      return this.orderSendMail.sendOrder(this.order)
    }
    return true;
  }
}

const orderManager = new OrderManager()

orderManager.createOder('userId-1001')
orderManager.addProduct({ name: 'washing machine', quantity: 2 })

console.log('Orders:::', orderManager.getOrder())
console.log('Orders:::', orderManager.sendOrder())