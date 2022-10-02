let inputBox = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

let removeTask = e => {
	e.target.closest(".task").remove();
}

let addTask = e => {
	tasksList.innerHTML +=
		`<div class="task">
      <div class="task__title">
        ${inputBox.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;

	inputBox.value = "";

  [...(tasksList.getElementsByClassName("task__remove"))].forEach(element => {
		element.addEventListener("click", removeTask)
	});

	e.preventDefault();
}

document.getElementById("tasks__add").addEventListener("click", addTask);
inputBox.addEventListener("keypress", e => {
	if (e.number == 13) addTask(e);
});