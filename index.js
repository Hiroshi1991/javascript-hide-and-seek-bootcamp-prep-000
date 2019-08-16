function getFirstSelector(selector){
 var match = document.querySelector(selector) ;
 return match;
}
function nestedTarget(){
var match = document.querySelector('#nested .target')
return match;
}
function increaseRankBy(n){
  var match = document.querySelectorAll('ranked-list li')
  for (let i=0; i<match.length;i++){
    match[i].innerHTML = parseInt(match[i].innerHTML)+n;
  }
  return match;
}

function test(){
}
  var match = document.querySelectorAll('#grand-node')