//var ingredient1 = "bread"
//var ingredients2 = "mild cheese"
//var ingredient3 = "sharp cheese"
//var ingredient4 = "butter"
//var ingredient5 = "tomato"
//var ingredient6 = "garlic"
var koncha1 = "M&M";
var koncha2 = "Laima"

var chocolateBars = ["snickers","nudred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars, koncha1){
  return [koncha1, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(addElementToBeginningOfArray, koncha2){
    return [koncha2, ...addElementToBeginningOfArray]
}
