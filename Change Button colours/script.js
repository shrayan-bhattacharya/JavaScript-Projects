var all_buttons = document.getElementsByTagName("button");

var copyAllButons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButons);

function buttonColorChange(buttonChanger) {
  if (buttonChanger.value === "red") {
    buttonRed();
  } else if (buttonChanger.value === "green") {
    buttonGreen();
  } else if (buttonChanger.value === "reset") {
    buttonColorReset();
  } else if (buttonChanger.value === "random") {
    randomColors();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButons[i]);
  }
}

function randomColors() {
  let colorChoices = [
    "btn-primary",
    "btn-success",
    "btn-warning",
    "btn-danger"
  ];

  for (let i = 0; i < all_buttons.length; i++) {
    let randomColorNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(colorChoices[randomColorNumber]);
  }
}