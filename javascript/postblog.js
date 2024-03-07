// const form = document.querySelector("#blogForm");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   Blogs();
// });

// function Blogs() {
//   let heading = document.querySelector("#heading").value;
//   let blogname = document.querySelector("#blogname").value;
//   let decription = document.querySelector("#decription").value;
//   let uploadImage = document.querySelector("#image");

//   if (heading.length === 0) {
//     const headerror = document.querySelector("#headerror");
//     headerror.innerHTML = "Please enter blog title";
//   } else if (blogname.length === 0) {
//     const blognameerr = document.querySelector("#blognameerr");
//     blognameerr.innerHTML = "Please enter blog name";
//   } else if (decription.length === 0) {
//     const deserror = document.querySelector("#deserror");
//     deserror.innerHTML = "Please enter blog description";
//   } else {
//     const object = { heading: heading, blogname: blogname, decription: decription };
//     const blogId = new Date().getTime();

//     // Handle image file
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//       const postblog = JSON.parse(localStorage.getItem("postblog")) || [];
//       const blogData = { ...object, blogId, image: reader.result };
//       postblog.push(blogData);
//       localStorage.setItem("postblog", JSON.stringify(postblog));
//     });
//     reader.readAsDataURL(uploadImage.files[0]);

//     alert("New blog successfully posted");

//     document.querySelector("#heading").value = "";
//     document.querySelector("#blogname").value = "";
//     document.querySelector("#decription").value = "";
//   }
// }


const form = document.querySelector("#blogForm");
const token=localStorage.getItem("token")

form.addEventListener("submit", (e) => {
     e.preventDefault();

     let heading = document.querySelector("#heading").value;
     let blogname = document.querySelector("#blogname").value;
     let decription = document.querySelector("#decription").value;
     let uploadImage = document.querySelector("#image");

     const data={heading,blogname,decription,uploadImage}

     const postman={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":token
      },
      body: JSON.stringify(data),
    }

    const API="https://type-bn-poltifolio.onrender.com/Jant/blogs/post"

    fetch(API,postman)
    .then((resp)=>{
       return resp.json()
    })
    .then((data)=>{
       alert(data.message)
    })
    .catch((error)=>{
      console.log(error)
    })
  
 });
