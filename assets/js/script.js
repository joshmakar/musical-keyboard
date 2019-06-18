// Generate a Random RGB Color
function randomColor() {
  // Pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  // Put it all together and return
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Get Random Number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}