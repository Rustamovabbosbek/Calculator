

const screen = document.getElementById("screen")
function calculate(expression) {
  try {
    // Only allow digits, math operators, parentheses, and spaces
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      throw new Error("Invalid input");
    }

    return new Function(`return ${expression}`)();
  } catch (err) {
    return 'Error';
  }
}

// Test
// console.log(calculate("23 + 45 * 65 + 1")); // 2978


function checkSymb (content) {
  let lastChar = content[content.length - 1]

  if (["+", "-", "*", "/"].includes(lastChar)) {
    return true;
    // screen.innerHTML = content.slice(0, -1) + value;
  } else {
    return false;
    // screen.innerHTML = content + value;
  }
}

const buttons = document.querySelectorAll('.btn');

let num1;
let num2;

//console.log(buttons);

buttons.forEach(button => {
  button.onclick = function () {
    //  console.log(this.dataset.value);
    //  console.log(this.dataset.action);
    value = this.dataset.value;
    action = this.dataset.action;
    let content = screen.innerHTML;

    if (value) {
      console.log(value);
      if (parseInt(value) && content == 0) {
        console.log("Ishladi")
        screen.innerHTML = value;
      } else if (parseInt(value)) {
        value = content + value;
        screen.innerHTML = value;
      } else if (parseInt(value) == 0 && content != 0) {
        screen.innerHTML = content + value;
      } else if (["+", "-", "*", "/"].includes(value)) {

      }
    } else {
      console.log(action);
      if (action == "all-clear") {
        screen.innerHTML = 0;
      } else if (action == "delete") {
        let len = content.length;
        content = content.slice(0, len - 1);
        screen.innerHTML = content;
      } else if (action == "equals") {
        let len = content.length;
        content = content.slice(0, len - 1);
        screen.innerHTML = content;
      }

    }

  };
});
