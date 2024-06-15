function blue() {
  document.getElementById("jay_name").classList.remove("red");
  document.getElementById("jay_name").classList.add("blue");
}
function red() {
  document.getElementById("jay_name").classList.remove("blue");
  document.getElementById("jay_name").classList.add("red");
}
function add() {
  document.getElementById("jay_name").classList.add("add");
  document.getElementById("jay_name").classList.remove("mine");
}
function mine() {
  document.getElementById("jay_name").classList.add("mine");
  document.getElementById("jay_name").classList.remove("add");
}
