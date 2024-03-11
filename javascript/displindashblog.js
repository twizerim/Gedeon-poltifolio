document.addEventListener('DOMContentLoaded', function () {

    const display = document.querySelector(".blog-ondash");  
    const API="https://type-bn-poltifolio.onrender.com/Jant/blogs/get"
     fetch(API)
     .then(resp =>{
         return resp.json()
     })
     .then(data =>{
        data.datas.map(object => {
        display.innerHTML=`
             <div class ="contain-blogs">
             <li class="blogdisp">
             
             <p>${object.blogTitle}</p>
             <div class="other">
             <h2>${object.blogName}</>
             <span>${object.blogDescription}</span>
             <img src="${object.blogImage}" alt="iraza">
             </div>
             <div class="group">
             <i class="fa-solid fa-pencil edit" id="${object._id}"></i>
             <i class="fa fa-trash delete" id="${object._id}"></i>
             </div>
           </li>
             </div>
        `
     
      });
      const updateselect=document.querySelector(".edit")
      console.log(updateselect)
      const updataform = document.querySelector(".update-blog-form")
        updateselect.onclick=function(){
          updataform.style.display="block"
          let blogdisp = this.parentElement.parentElement;
          let p = blogdisp.querySelector("p").innerText;
          let other = blogdisp.querySelector(".other");
          let h2 = other.querySelector("h2").innerText;
          let span = other.querySelector("span").innerText;
          let img = other.querySelector("img").getAttribute("src");
          let id = updateselect.getAttribute("id");


          const editTitle = updataform.querySelector('#title');
          const editName = updataform.querySelector('#names');
          const editDescription = updataform.querySelector('#summary');
          const editImage = updataform.querySelector('#image')

          editTitle.value = p;
          editName.value = h2;
          editDescription.value = span;
          editImage.value = img;

          updataform.addEventListener("submit",(e)=>{
             e.preventDefault()
            const updatedData = {
              blogTitle: editTitle.value,
              blogName: editName.value,
              blogDescription: editDescription.value,
              blogImage: editImage.value
          };
              console.log(updatedData)
            //   const postman={
            //     method:"PATCH", 
            //     headers:{
            //         "Content-Type": "application/json",
            //         "auth-token":token
            //     },
            //     body: JSON.stringify(updatedData)
            // }
            // const api=`https://type-bn-poltifolio.onrender.com/Jant/blogs/update/${id}`
            // fetch(api,postman)
            // .then(resp =>{
            //    return resp.json()
            // })
            // .then(data =>{
            //    console(data)
            // })
            // .catch(error =>{
            //    console(error)
            // })
          })

      }
  
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