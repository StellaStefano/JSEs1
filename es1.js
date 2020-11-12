document.addEventListener("DOMContentLoaded", addBtn);

var addBtn = function(){
  var btn = document.createElement("button");
  btn.innerHTML = "NON CLICCARE";

  document.getElementById("body1").append(btn);
}

var changeColor = function () {
  console.log("BUONGIORNISSIMOOO!!1!!1");
  document
    .getElementById("div1")
    .setAttribute("style", "background-color:   rgb(163, 36, 68)");
  document.getElementById("span1").innerHTML = "CUCU";
  document.getElementById("div1").innerHTML =
    "<h1>TI AVEVO DETTO DI NON CLICCARE MALEDETTO</h1>";
};

var button = document.getElementById("btn1");

button.addEventListener("click", changeColor);
button.addEventListener("DOMContentLoaded", addBtn);