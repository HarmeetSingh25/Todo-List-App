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

