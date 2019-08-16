function getFirstSelector(selector){
  var test = document.querySelector(selector);
  //console.log(test);
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var elements = document.querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + parseInt(n);
  }
}

function deepestChild() {
  var parent = document.getElementById('grand-node');
}

var child = "";

function deepestChild() {
  var parent = document.getElementById('grand-node');
  
}