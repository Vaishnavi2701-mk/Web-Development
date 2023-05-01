const cart = ["shoes", "dress", "jewllery"];

// This is promise chaining, and we are piping one function into another so
// it is important to return a function
// catch statement at the end will catch error for everything above
// so if error occurs in any one step then whole step will fail
// we can add it in between as well

// This will e output if cart is empty
// Cart is not valid!
// payment successfull

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (orderInfo) {
    console.log(orderInfo);
  })
  .catch(function () {
    console.log("I will occur anyhow no matter what");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!valideCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 1000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successfull");
  });
}

function valideCart(cart) {
  return true;
}
