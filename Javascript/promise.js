const cart = ["shoes", "dress", "jewllery"];

// const promise = createOrder(cart);

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// createOrder is a promise object and when this object contain some data thereafter "then" function will run

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
  })
  // It will handle any type of error
  .catch(function (err) {
    console.log(err.message);
  });

// producer part

function createOrder(cart) {
  // creating promise , it takes two parameters, and they can be use only once that is one more benefit of using promises
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

// If function will return true it will simply print an output but what if it returns false it will throe an error in console, so
// to handle it we will keep a catch function attached to it.
// function valideCart(cart) {
//   return false;
// }
