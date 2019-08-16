function getFirstSelector(selector){
  return document.querySelector(selector)

 }

 function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')

 }
function increaseRankBy(n){
  var match = document.querySelectorAll('ranked-list li')
  for (let i=0; i<match.length;i++){
    match[i].innerHTML = parseInt(match[i].innerHTML)+n;
  }

 }

 function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]

 }

function test(){
}
  var match = document.querySelectorAll('#grand-node')