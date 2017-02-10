//
function forLoop(array){
  for (let i=0; i < 25; i++){
    if (i===1){
      array.push("I am 1 strange loop.")
    } else {
      array.push("I am &{1} strange loops.")
    }
  }
  return array
}

//logs iterations of n and decrements until n is 0, then returns the string 'done'
function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
  return "done";
}

/**
Uses maybeTrue() function as the condition and removes a piece of the
array after each iteration until maybeTrue() returns false and the
array is empty
**/
function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue());

  return array
}
