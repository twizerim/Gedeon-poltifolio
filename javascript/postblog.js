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

let token =window.localStorage.getItem("token")

const processImage = (input) => {
    return new Promise((resolve, reject) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            reject("No file selected");
        }
    });
};
   const form=document.querySelector("form")
   form.addEventListener("submit",(e)=>{
    e.preventDefault()
    blogData()  
   })

   async function blogData(){
    let blogTitle = document.querySelector('#title').value;
    let blogImageInput = document.getElementById('image');
    let blogname=document.querySelector("#names").value
    let blogDescription = document.querySelector('#summary').value;
    try {
        let blogImage = await processImage(blogImageInput);
        const blogs = {
            blogTitle,
            blogImage,
            blogname,
            blogDescription
        };
        const API='https://type-bn-poltifolio.onrender.com/Jant/blogs/post'
        const postman = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":token
            },
            body: JSON.stringify(blogs)
        };
        fetch(API,postman)
        .then(resp =>{
            return resp.json()
        })
        .then(data =>{
            alert(data.message)
        })
    //     const response = await fetch(API, postman);
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     alert(data.message)
     } catch (error) {
        alert(error)
    }
    
}
    










