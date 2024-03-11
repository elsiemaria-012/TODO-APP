// 1. SELECT THE IDS After LOAD
window.addEventListener("load", () => {
  const form = document.querySelector("#newTaskForm"); //form id
  const input = document.querySelector("#newTaskInput"); //1st input field
  const list_el = document.querySelector("#tasks"); // 2nd input field div

  //   displayTaskIfExisting();

  // 2. PREVENT FROM REFRESHING
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 3. Define task

    const task = input.value;

    // 3.  VALLIDATION AND IF THE CONDITION IS MET , RETURN THE BELOW BLOCK OF CODE:
    if (!task) {
      alert("pls fill out the form");
      return;
    }

    saveTasksToLocalStorage(task);

    // 4. :CREATE INPUT DIV FOR NEW TASKS ELEMENT(.createElement create DOM NODES)
    const task_el = document.createElement("div");

    //SELECT THE createElement WITH CLASS to add
    task_el.classList.add("task"); // wen add btn is clicked to add task content

    // 5. create another div for the added contents and select with class
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    // task_content_el.innerText = task;

    // 7. use .appendChild to add new HTML elements to an existing HTML document which is the newly added content.
    task_el.appendChild(task_content_el);

    // questions
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    //CREATE A DIV FOR ACTION BUTTONS
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    //CREATE AN ACTION BUTTON EDIT WITH INNER TEXT
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    //CREATE AN ACTION BUTTON DELETE WITH INNER TEXT
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    // Append the task element to the list element in the page
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    //div containing both buttons
    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    //set the inpute.value to empty string to clear off the inpute field after save
    input.value = "";

    //write a condition for the edit action button
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    // write a condition for the delete action buttons
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });

  //save in local storage
  const saveTasksToLocalStorage = (newTodo) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    if (allTasks) {
      localStorage.setItem("tasks", JSON.stringify([...allTasks, newTodo]));
    } else {
      localStorage.setItem("tasks", JSON.stringify([newTodo]));
    }
  };
});

//create a functn dt il call itm frm local strg 2 disply in d dom

// function displayTaskIfExisting() {
//     const list_els = document.querySelector("#tasks");
//     const allTasks = JSON.parse(localStorage.getItem("tasks"));

//     if (allTasks) {

//         const eachTaskLoopedToDisplay = allTasks.map((task) => {
//             return `<div class="task">
//                 <div class="content">
//                     <input
//                         type="text"
//                         class="text"
//                         value="${task}"
//                         readonly />
//                 </div>
//                 <div class="actions">
//                     <button class="edit">Edit</button>
//                     <button class="delete">Delete</button>
//                 </div>
//             </div>`;
//         });

//         list_els.innerHTML = eachTaskLoopedToDisplay.join('');
//         console.log(list_els);
//     }
// }
