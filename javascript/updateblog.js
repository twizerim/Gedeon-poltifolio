var currentTask = null;

function getCurrentTask(event) {
    currentTask = event.value;
  }

  function editTask(event) {
    let postblog = Array.from(JSON.parse(localStorage.getItem("postblog")));
    // check if task is empty
    if (event.value === "") {
      alert("Task is empty!");
      event.value = currentTask;
      return;
    }
    // task already exist
    tasks.forEach(task => {
      if (task.task === event.value) {
        alert("Task already exist!");
        event.value = currentTask;
        return;
      }
    });
    // update task
    tasks.forEach(task => {
      if (task.task === currentTask) {
        task.task = event.value;
      }
    });
    // update local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }