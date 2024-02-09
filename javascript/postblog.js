

const form=document.querySelector("#blogForm");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    Blogs()
    
})

function Blogs(){
    
    let  heading=document.querySelector("#heading").value;
    let  blogname=document.querySelector("#blogname").value;
    let  decription=document.querySelector("#decription").value;
    let uploadImage=document.querySelector("#image")

    if(heading.length===0){
         const headerror=document.querySelector("#headerror");
         headerror.innerHTML="Please enter blog title"
    }else if(blogname.length===0){
        const blognameerr=document.querySelector("#blognameerr")
        blognameerr.innerHTML="Please enter blog name"
    }else if(decription.length===0){
        const  deserror=document.querySelector("#deserror");
         deserror.innerHTML="Please blog description"
    }else{
        const object = { heading: heading, blogname: blogname, decription: decription };
         const blogId=new Date().getTime()
        // Handle image file
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            localStorage.setItem("recent-image", reader.result);
        });
        reader.readAsDataURL(uploadImage.files[0]);

        // Handle other form data
        const postblog = JSON.parse(localStorage.getItem("postblog")) || [];
        postblog.push(object,blogId);
        localStorage.setItem("postblog", JSON.stringify(postblog));

        alert("New blog successfully posted");

        document.querySelector("#heading").value = "";
        document.querySelector("#blogname").value = "";
        document.querySelector("#decription").value = "";

    }
}

