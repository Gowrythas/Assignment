
function myFunction(add) {
  var letters = /^[A-Za-z]+$/;
  if(add[0].match(letters)){
  document.getElementById('print').style.color = 'black';
  document.getElementById('print').innerHTML = add + " has been added";
  console.log(add)
  }
  else {
  document.getElementById('print').style.color = 'red';
  document.getElementById('print').innerHTML = "Invalid TV show name";
  }
  }