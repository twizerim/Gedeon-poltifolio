// document.addEventListener('DOMContentLoaded', function () {

//     const postblog = localStorage.getItem("postblog");
//     if (postblog) {
//         const blogArrary = JSON.parse(postblog);

//         const blogcontainner = document.querySelector(".card-blogs");

//         blogArrary.forEach(object => {

//             const blogElement = document.createElement("div");
//             blogElement.innerHTML = `
                 
//             <div class="carder">
//             <div class="picture">
//                <img id="imageprevie" src="" alt="irahari">
//             </div>
//             <div class="decription">
//                 <h2>Blog title:${object.heading}</h2>
//                  <h3>Blog name: ${object.blogname}</h3>
//                  <p>${object.decription}</p>
//                  <span><a href="#">Lead more........</a></span>
//                   <div class="favolite">
//                      <li> <i class="fa-solid fa-thumbs-up"></i>50</li>
//                      <li> <i class="fa-solid fa-thumbs-down"></i>1</li>
//                      <li><i class="fa-solid fa-comment"></i>70</li>
//                   </div>
//             </div>
//             `;
//             blogcontainner.appendChild(blogElement);
//         });

//         const imagefroData=localStorage.getItem("${postblog.image}");
//          console.log(imagefroData)
//         if(imagefroData){
//             document.querySelector("#imageprevie").setAttribute("src",imagefroData)
//         }
//     }

// });

const blogcontainner = document.querySelector(".card-blogs");
const spinner = document.querySelector(".spinner");
spinner.style.display = "block";
blogcontainner.style.display = "none";

const API="https://type-bn-poltifolio.onrender.com/Jant/blogs/get"

fetch(API)
.then((resp)=>{
    return resp.json()
})
.then((object)=>{
    object.map((data)=>{
        spinner.style.display = "none";
        blogcontainner.style.display = "block";
       
        newsIndex.innerHTML +=`

        <div class="carder">
                     <div class="picture">
                       <img id="imageprevie" src="" alt="irahari">
                    </div>
                     <div class="decription">
                         <h2>Blog title:${data.heading}</h2>
                          <h3>Blog name: ${data.blogname}</h3>
                          <p>${data.decription}</p>
                          <span><a href="#">Lead more........</a></span>
                          <div class="favolite">
                             <li> <i class="fa-solid fa-thumbs-up"></i>50</li>
                              <li> <i class="fa-solid fa-thumbs-down"></i>1</li>
                              <li><i class="fa-solid fa-comment"></i>70</li>
                          </div>
                     </div>
            
        `
    
    })
})


