// $(document).ready(function () {
//   $("h1").css("color", "yellow");
// });

// $("h1").css("color", "yellow");

// 1. Manipulating Classes

// adding more classes to particular tag

// add 1 class

// $("h1").addClass("big-heading");

// // add more than 1 class

// $("h1").addClass("big-heading margin");

// // checking a specific tag has a class or not

// // $("h1").hasClass("margin");
// // => true;

// // 2. Manipulating text

// // .text only changes text
// // $("h1").text("Bye");

// //.html changes text along with its property
// //$("h1").html("<em>Bye</em>");

// // 3. Manipulating Attributes

// // $("h1").attr("class");
// // => 'big-heading margin'

// $("a").attr("href", "https://login.yahoo.com/?.intl=in");

// // 4. Adding EventListners

// // while clicking on button color of h1 should change

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// // while typing something inside input it should console.log that

// $("input").keydown(function (event) {
//   console.log(event.key);
// });

// // Those keys which were typed inside input should replace h1 one by one

// $("input").keydown(function (event) {
//   $("h1").text(event.key);
// });

// // while putting the mouse over heading it should change the color;

// $("h1").on("mouseover", function () {
//   $("h1").css("color", "purple");
// });

// // 5.Adding and Removing elements in jQuery

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// 6. Animation in jQuery

$("button").on("click", function () {
  // $("h1").hide();
  // $("h1").show();
  // $("h1").fadeIn();
  // $("h1").fadeOut();
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  // $("h1").animate({ opacity: 0.5 });
  // $("h1").animate({ margin: 0.5 });
  // $("h1").animate({ color: red }); // This will not work as second input should be number

  // we can chain the animation
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
