//var ingredient1 = "bread"
//var ingredients2 = "mild cheese"
//var ingredient3 = "sharp cheese"
//var ingredient4 = "butter"
//var ingredient5 = "tomato"
//var ingredient6 = "garlic"
var koncha1 = "M&M"

var chocolateBars = ["snickers","nudred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars, koncha1){
  return ["Philadelphia", ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, koncha1){
  chocolateBars.unshift(koncha1);
  return chocolateBars;
}
