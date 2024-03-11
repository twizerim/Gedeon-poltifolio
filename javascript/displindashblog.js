document.addEventListener('DOMContentLoaded', function () {

    const display = document.querySelector(".blog-ondash");  
    const API="https://type-bn-poltifolio.onrender.com/Jant/blogs/get"
     fetch(API)
     .then(resp =>{
         return resp.json()
     })
     .then(data =>{
        data.datas.map(object => {
          console.log(object)
        display.innerHTML=`
             <div class ="contain-blogs">
             <li class="blogdisp">
             <p>${object.blogTitle}</p>
             <div class="group">
             <i class="fa-solid fa-pencil" id="edit"></i>
             <i class="fa fa-trash" id="delete"></i>
             </div>
           </li>
             </div>
        `
     
  });
     })  
    }

);

// window.onload = loadTasks;
// function loadTasks(){
//     if (localStorage.getItem("postblog") == null) return;

//       // Get the tasks from localStorage and convert it to an array
//       let postblog = Array.from(JSON.parse(localStorage.getItem("postblog")));

//       // Loop through the tasks and add them to the list
//       postblog.forEach(object => {
//         const blogcontainner = document.querySelector(".display-bloges");
//         const blogElement = document.createElement("ul");
//         blogElement.innerHTML = `
            
//               <li>
//                 <div class="group">
//                 <input type="checkbox" onclick="taskComplete(this)" class="check" ${object.completed ? 'checked' : ''}>
//                 <input type="text" value="${object.heading}" class="task ${object.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
//                 </div>

//                 <div class="iconss">
//                 <i class="fa fa-trash" onclick="removeTask(this)"></i>
//                 </div>
//               </li>
//         `;
//           blogcontainner.insertBefore(blogElement, blogcontainner.children[0]);
//       });
// }

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

    function editTask(event) {
      let postblog = Array.from(JSON.parse(localStorage.getItem("postblog")));
      // check if task is empty
      if (event.value === "") {
        alert("Task is empty!");
        event.value = currentTask;
        return;
      }
      // task already exist
      postblog.forEach(object => {
        if (object.object === event.value) {
          alert("Task already exist!");
          event.value = currentTask;
          return;
        }
      });
      // update task
      postblog.forEach(object => {
        if (object.object === currentTask) {
          object.object = event.value;
        }
      });
      // update local storage
      localStorage.setItem("postblog", JSON.stringify(postblog));
    }