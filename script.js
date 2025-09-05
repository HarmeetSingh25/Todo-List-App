let input = document.querySelector(".input-container input");
let btn = document.querySelector(".input-container button");
btn.addEventListener("click", () => {
  console.log(input.value);
  TasKCreater(input.value);
  input.value = "";
});

let Task_container = document.querySelector(".Task_container ");
function TasKCreater(data) {
  let task = document.createElement("div");
  task.className = "task";
  let label = document.createElement("label");

  let inputCheckBox = document.createElement("input");
  label.appendChild(inputCheckBox);

  task.appendChild(label);
  inputCheckBox.type = "checkbox";

  let p = document.createElement("p");
  p.textContent = data;
  console.log(data);

  label.appendChild(p);

  Task_container.appendChild(task);
  console.log(Task_container);
}
