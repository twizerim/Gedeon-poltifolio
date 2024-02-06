
document.addEventListener('DOMContentLoaded', function () {

    const postblog = localStorage.getItem("postblog");
    if (postblog) {
        const blogArrary = JSON.parse(postblog);

        const blogcontainner = document.querySelector(".Blogtable");
        

        blogArrary.forEach((object,index)=> {

            const blogElement = document.createElement("tr");
            blogElement.innerHTML = `
                 
            <td>${index+1}</td>
            <td>${object.heading}</td>
            <td>${object.blogname}</td>
            <td><a href="./blog.html" onclick="byajeto()" style="background-color: green; color: whitesmoke;">Update</a></td>
            <td><button style="background-color: red;color: whitesmoke;">Delete</button></td>
            `
            blogcontainner.appendChild(blogElement);
        });

       
    }

});
