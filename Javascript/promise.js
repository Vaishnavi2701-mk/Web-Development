const cart = ["shoes", "dress", "jewllery"];

// const promise = createOrder(cart);

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// producer part

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //proceedToPayment
    //orderSummary
    //updateWallet

    if (!valideCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }

    //logic for createOrder

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 1000);
    }
  });
  return pr;
}
function valideCart(cart) {
  return true;
}

// function valideCart(cart) {
//   return false;
// }
