
const idParams=window.location.href.split("?id=")[1]
let token=window.localStorage.getItem("token")
const getoneblog=document.querySelector(".display")
let spinner = document.querySelector(".spinner")
let allcomment=document.querySelector(".comment-display")
spinner.style.display="block"

let API=`https://type-bn-poltifolio.onrender.com/Jant/blogs/get/${idParams}`
let postman={
    headers:{
        "auth-token":token
    }
}

fetch(API,postman)
.then(respo =>{
    return respo.json()
})
.then(data =>{
    console.log(data)
    getoneblog.innerHTML=`
         
    <div class="picture">
    <img src="${data.datas.blogImage}" alt="image">
    <div class="favolite">
        <li onclick="putLikes()"> <i class="fa-solid fa-thumbs-up" onClick="putLikes()"></i>${data.datas.likes.length}</li>
        <li> <i class="fa-solid fa-thumbs-down"></i>${data.datas.dislikes.length}</li>
        <li onclick="comment()"><i class="fa-solid fa-comment"></i>${data.datas.comments.length}</li>
     </div>
</div>

    <div class="discritpion">
        <h2>Blog title:${data.datas.blogTitle}</h2>
        <h3>Blog name: ${data.datas.blogName}</h3>
        <p>Certainly! Could you please provide more details or specify what you would like a 
            description of? Are you looking for a description of a specific topic,
         concept, or something else? Let me know so I can assist you better!</p>
         <span>${data.datas.blogDescription}</span>
         <div class="view-comment">
            <span onclick="comment()">View comment ...</span>
         </div>
         
    </div>
    
    `
     data.datas.comments.map(comm =>{
        console.log(comm)
         allcomment.innerHTML=`
            <div class="comment">
                <h1>${comm.postAt}</h1>
                <h2>${comm.commeterName}</h2>
                <span>${comm.comment}</span>
            </div>
        `
     })

    spinner.style.display="none"
})
.catch(error =>{
    console.log(error)
})

