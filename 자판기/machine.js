let coin = 0;

document.querySelectorAll(".bt input").forEach((Element) => {
  Element.addEventListener("click", function () {
    if (Element.getAttribute("id") == "btpr1") coin += 1000;
    if (Element.getAttribute("id") == "btpr2") coin += 500;
    if (Element.getAttribute("id") == "btpr3") coin += 100;
    ChangeColor();
    document.getElementById("current").innerHTML = coin + "원";
  });
});

document.querySelector("p").style.color = "purple";

function ChangeStyle(id, color) {
  document.querySelector(id).style.color = color;
}

document.querySelector("class").style.color = function ChangeColor() {
  ChangeStyle("#coffee", "red");
  ChangeStyle("#corn", "red");
  ChangeStyle("#water", "red");
  if (coin >= 1000) {
    ChangeStyle("#coffee", "blue");
    ChangeStyle("#corn", "blue");
    ChangeStyle("#water", "blue");
  } else if (coin >= 700) {
    ChangeStyle("#coffee", "blue");
    ChangeStyle("#water", "blue");
  } else if (coin >= 500) {
    ChangeStyle("#water", "blue");
  }
};

document.querySelector("p").style.color = "purlpe";

let getDrinkValue = 0;

function buy() {
  if (coin >= getDrinkValue) coin -= getDrinkValue;
  else alert("잔액이 부족합니다.");
}

document.querySelectorAll(".kind input").forEach((Element) => {
  Element.addEventListener("click", function () {
    if (Element.getAttribute("id") == "corn") getDrinkValue = 1000;
    if (Element.getAttribute("id") == "coffee") getDrinkValue = 700;
    if (Element.getAttribute("id") == "water") getDrinkValue = 500;
    buy();
    ChangeColor();
    document.getElementById("current").innerHTML = coin + "원";
  });
});

var yellow = function () {
  this.name = name;
};