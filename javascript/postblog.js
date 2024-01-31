

const blogForm=document.querySelector("#blogForm");

blogForm.addEventListener("submit",function(e){
     e.preventDefault()
     postBlog()
})

function postBlog(){
    
    let title=document.querySelector("#title").value
    let name=document.querySelector("#name").value
    let imageInput=document.querySelector("#image")
    let discription=document.querySelector("#decription").value

    let image=imageInput.files.length > 0 ? imageInput.files[0]:null;
     
    const postId=Date.now().toString()

    const Blogs=JSON.parse(localStorage.getItem("Blogs")) ||[]
    const object={
         title:title,
         name:name,
         image:image,
         discription:discription
    }
    Blogs.push(object)
    localStorage.setItem("Blogs",JSON.stringify(Blogs))
    alert("New blog successfuly posted")

    document.querySelector("#title").value="";
    document.querySelector("#name").value="";
    document.querySelector("#image").value="";
    document.querySelector("#discription").value=""
}