let input = "";
let deleteContent = "";
function toTextArea(inp) {
  input += inp.innerText;
  document.getElementById("text").value = input;
}

function backspace() {
  input = document.getElementById("text").value;
  input = input.substr(0, input.length - 1);
  document.getElementById("text").value = input;
}

// function del() {
//     input = document.getElementById("text").value;
//     input = input.substr(0, input.length - 1);
//     document.getElementById("text").value = input;
//   }
