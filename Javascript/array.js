// Welcome the guest if he/she exist in guestlist otherwise alert a message maybe nextime!

var guestlist = ["vaishnavi", "Shruti", "Diksha", "Sonal", "Aaryan"];
var guest = "hgjhghjgjk"; //prompt("Enter your guest!");

if (guestlist.includes(guest)) {
  console.log("Welcome!");
} else {
  console.log("Sorry maybe next-time");
}
