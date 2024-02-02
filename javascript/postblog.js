

const form=document.querySelector("#blogForm");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    Blogs()
    
})

function Blogs(){
    
    let  Title=document.querySelector("#heading").value;
    let  blogname=document.querySelector("#blogname").value;
    let  blogdescription=document.querySelector("#decription").value;
    let image=document.querySelector("#image").value;

    if(Title.length===0){
         const headerror=document.querySelector("#headerror");
         headerror.innerHTML="Please enter blog title"
    }else if(blogname.length===0){
        const blognameerr=document.querySelector("#blognameerr")
        blognameerr.innerHTML="Please enter blog name"
    }else if(blogdescription.length===0){
        const  deserror=document.querySelector("#deserror");
         deserror.innerHTML="Please blog description"
    }else if(image.length===0){
        const imagerror=document.querySelector("#imagerror")
        imagerror.innerHTML="Please enter blog image"
    }else{
        const object={Title:heading,blogname:blogname,blogdescription:decription,image:image}
         
        const postblog=JSON.parse(localStorage.getItem("postblog")) || []
        postblog.push(object)
        localStorage.setItem("postblog",JSON.stringify(postblog))

        alert("New blog successfuly posted")

    }
}

