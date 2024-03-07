// document.addEventListener('DOMContentLoaded', function () {

//     const messages = localStorage.getItem("messages");
//     if (messages) {
//         const messageArrary = JSON.parse(messages);

//         const messcontainner = document.querySelector(".message-cards");

//         messageArrary.forEach(contactus => {

//             const messageElement = document.createElement("div");
//             messageElement.innerHTML = `
//             <div class="card-mess">
//             <h1 id="date">2/february/2024</h1>
//             <h2 id="name">${contactus.names}</h2>
//             <h3 id="email">${contactus.email}</h3>
//             <p>${contactus.phone}</p>
//             <span>${contactus.message}</span>
//         </div>
            
//             `
//             messcontainner.appendChild(messageElement);
//         });
//     }

// });
const token=window.localStorage.getItem("token")
const Allmessage = document.querySelector(".message-cards")
const spinner = document.querySelector(".spinner")
Allmessage.style.display="none"
spinner.style.display="block"

const postman={
    headers:{
        "auth-token":token
    }
}

fetch("https://type-bn-poltifolio.onrender.com/Jant/message",postman)
.then((respone)=>{
    return respone.json()
})
.then((data)=>{
    data.datas.map(element => {
        Allmessage.style.display="grid"
        spinner.style.display="none"
        Allmessage.innerHTML = `
             <div class="card-mess">
            <h1 id="date">2/february/2024</h1>
             <h2 id="name">${element.names}</h2>
             <h3 id="email">${element.email}</h3>
             <p>${element.phone}</p>
             <span>${element.message}</span>
         </div>
            
             `
    })
}).catch((error)=>{
    alert(error)
})
