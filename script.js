let input = document.querySelector(".input-container input");
let btn = document.querySelector(".input-container button");
btn.addEventListener("click", () => {
  let text = input.value;
  if (!text) return;
  TasKCreater(text);
  input.value = " ";
});

let Task_container = document.querySelector(".Task_container ");

// restore saved tasks on load
PrintTask();

Task_container.addEventListener("click", (e) => {
  // checkbox toggle
  if (e.target.matches("input[type='checkbox']")) {
    const checkbox = e.target;
    console.log(checkbox);
    
    const label = checkbox.closest(".task")?.querySelector("label");
    if (checkbox.checked) {
      if (label) label.style.textDecoration = "line-through";
      // ensure attribute exists so innerHTML contains checked
      checkbox.setAttribute("checked", "");
    } else {
      if (label) label.style.textDecoration = "none";
      checkbox.removeAttribute("checked");
    }
    SaveData();
  }

  // delete icon clicked
  if (e.target.closest(".ri-close-line")) {
    const taskEl = e.target.closest(".task");
    if (taskEl) {
      taskEl.remove();
      SaveData();
    }
  }
});

function TasKCreater(data) {
  let task = document.createElement("div");
  task.className = "task";

  let label = document.createElement("label");

  let inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";

  label.appendChild(inputCheckBox);
  task.appendChild(label);

  let p = document.createElement("p");
  p.textContent = data;

  let Delete = document.createElement("span");
  Delete.innerHTML = `<i class="ri-close-line"></i>`;
  task.appendChild(Delete);
  label.appendChild(p);

  Task_container.append(task);

  Task_container.addEventListener("click", (e) => {
    if (e.target === inputCheckBox) {
      if (inputCheckBox.checked) {
        e.target.closest(".task label").style.textDecoration = `line-through`;
        SaveData();
      } else {
        e.target.closest(".task label").style.textDecoration = `none`;
        SaveData();
      }
    }
    if (e.target.closest(".ri-close-line")) {
      console.log("Delete");
      console.log(e.target.closest(".task"));
      e.target.closest(".task").remove();
      SaveData();
    }
  });
  SaveData();
}

