//99 bottles of beer on the wall, 99 bottles of beer.
//Take one down and pass it around, 98 bottles of beer on the wall.

var countBottle = 99;
while (countBottle >= 0) {
  var word = "bottles";
  if (countBottle === 1) {
    word = "bottle";
  }
  console.log(countBottle + " " + word + " of beer on the wall, ");
  console.log(countBottle + " " + word + " of beer.");
  countBottle--;
  console.log(
    "Take one down and pass it around, " +
      countBottle +
      " " +
      word +
      " of beer on the wall."
  );
}
