function displayblog(){
    let postblog = localStorage.getItem("postblog");
    if (postblog) {
        const blogArrary = JSON.parse(postblog);

        const blogcontainner = document.querySelector(".Blogtable");

        blogArrary.forEach((object,index)=> {

            const blogElement = document.createElement("tr");
            blogElement.innerHTML = `
                 
            <td>${index+1}</td>
            <td>${object.heading}</td>
            <td>${object.blogname}</td>
            <td><button onclick="byajeto()" style="background-color: green; color: whitesmoke;">Update</button></td>
            <td><button style="background-color: red;color: whitesmoke;">Delete</button></td>
            `
            blogcontainner.appendChild(blogElement);
        });

       
    }
}

function deleteblog(index){
    let postblog=JSON.parse(localStorage.getItem("postblog")) || [];
    postblog.splice(index, 1);
    localStorage.setItem("postblog", JSON.stringify(postblog));
    
    displayblog()
}