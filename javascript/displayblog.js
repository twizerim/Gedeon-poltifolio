document.addEventListener('DOMContentLoaded', function () {

    const postblog = localStorage.getItem("postblog");
    if (postblog) {
        const blogArrary = JSON.parse(postblog);

        const blogcontainner = document.querySelector(".card-blogs");

        blogArrary.forEach(object => {

            const blogElement = document.createElement("div");
            blogElement.innerHTML = `
                 
            <div class="carder">
            <div class="picture">
               <img src="${object.image}" alt="irahari">
            </div>
            <div class="decription">
                <h2>Blog title:${object.heading}</h2>
                 <h3>Blog name: ${object.blogname}</h3>
                 <p>${object.decription}</p>
                 <span><a href="">Lead more........</a></span>
                  <div class="favolite">
                     <li> <i class="fa-solid fa-thumbs-up"></i><p>50</p></li>
                     <li> <i class="fa-solid fa-thumbs-down"></i><p>1</p></li>
                     <li><i class="fa-solid fa-comment"></i><p>70</p></li>
                  </div>
            </div>
            `;
            blogcontainner.appendChild(blogElement);
        });
    }

});
