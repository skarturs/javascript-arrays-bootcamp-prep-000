//var ingredient1 = "bread"
//var ingredients2 = "mild cheese"
//var ingredient3 = "sharp cheese"
//var ingredient4 = "butter"
//var ingredient5 = "tomato"
//var ingredient6 = "garlic"
var candyString = "Philadelphia"

var chocolateBars = ["snickers","nudred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars, candyString){
  return ["Philadelphia", ...chocolateBars]
}