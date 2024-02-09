document.addEventListener('DOMContentLoaded', function () {

    const postblog = localStorage.getItem("postblog");
    if (postblog) {
        const blogArrary = JSON.parse(postblog);

        const blogcontainner = document.querySelector(".display-bloges");

        blogArrary.forEach(object => {

            const blogElement = document.createElement("ul");
            blogElement.innerHTML = `
                 
            <li class="blogdisp">
                        <div class="group">
                            <input type="checkbox" onclick="taskComplete(this)" class="check">
                            <input type="text" value="${object.heading}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
                        </div>
                        <i class="fa fa-trash" onclick="removeTask(this)"></i>
                      </li>
                    </ul>
            `;
            blogcontainner.appendChild(blogElement);
        });
    }

});

window.onload = loadTasks;
function loadTasks(){
    if (localStorage.getItem("postblog") == null) return;

      // Get the tasks from localStorage and convert it to an array
      let postblog = Array.from(JSON.parse(localStorage.getItem("postblog")));

      // Loop through the tasks and add them to the list
      postblog.forEach(object => {
        const blogcontainner = document.querySelector(".display-bloges");
        const blogElement = document.createElement("ul");
        blogElement.innerHTML = `
            
              <li>
                <div class="group">
                <input type="checkbox" onclick="taskComplete(this)" class="check" ${object.completed ? 'checked' : ''}>
                <input type="text" value="${object.object}" class="task ${object.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
                </div>

             <i class="fa fa-trash" onclick="removeTask(this)"></i>
              </li>
        `;
          blogcontainner.insertBefore(blogElement, blogcontainner.children[0]);
      });
}

function taskComplete(event) {
    let postblog= Array.from(JSON.parse(localStorage.getItem("postblog")));
    postblog.forEach(object => {
      if (object.object === event.nextElementSibling.value) {
        object.completed = !object.completed;s
      }
    });
    localStorage.setItem("postblog", JSON.stringify(postblog));
    event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
    let postblog = Array.from(JSON.parse(localStorage.getItem("postblog")));
    postblog.forEach(object => {
      if (object.object === event.parentNode.children[1].value) {
        // delete task
        postblog.splice(postblog.indexOf(object), 1);
      }
    });
    localStorage.setItem("postblog", JSON.stringify(postblog));
    event.parentElement.remove();
}
  var currentTask = null;

    // get current task
    function getCurrentTask(event) {
      currentTask = event.value;
    }