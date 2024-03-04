
// const contact=document.querySelector("#contact");

// contact.addEventListener("submit",function(e){
//     e.preventDefault()

//     Contactme()
// })

// function Contactme(){
    
//     let names=document.querySelector("#names").value;
//     let email=document.querySelector("#email").value;
//     let phone=document.querySelector("#phone").value;
//     let message=document.querySelector("#message").value
//     const ansewr=document.querySelector(".solution");
     

//     if(names.length===0){
//         const namerror=document.querySelector("#nameError")
//          namerror.innerHTML="please write your firstname"
//      }else if(email.length===0){
//                const emailerror=document.querySelector("#emailerror")
//                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                 if(!emailRegex.test(email)){
//                      emailerror.innerHTML="Invalid email"
//                 }
                
//      }else if(phone.length!==10){
//          const phonerror=document.querySelector("#phonerror")
//            phonerror.innerHTML='please write your phone number collectly'
    
// }else{
//         const messages=JSON.parse(localStorage.getItem("messages"))||[]
//         const contactus={
//             names:names,
//             email:email,
//             phone:phone,
//             message:message
//         }
//         messages.push(contactus)
//         localStorage.setItem("messages",JSON.stringify(messages))
//         ansewr.innerHTML='message success fuly sent'

//            document.querySelector("#names").value="";
//            document.querySelector("#email").value="";
//            document.querySelector("#phone").value="";
//            document.querySelector("#message").value=""
//     }   
// }


const contact=document.querySelector("#contact")

contact.addEventListener("submit",function(e){
         e.preventDefault()
    
         let names=document.querySelector("#names").value;
         let email=document.querySelector("#email").value;
         let phone=document.querySelector("#phone").value;
         let message=document.querySelector("#message").value
         const ansewr=document.querySelector(".solution")

         const data={names,email,phone,message}

         const postman={
            method:"POST",
            headers:{
                "Content-Type": "application/json" 
            },
            body:JSON.stringify(data)
        }

        const API="https://type-bn-poltifolio.onrender.com/Jant/message"

        fetch(API,postman)

        .then((resp)=>{
            return resp.json()
        })
        .then((data)=>{
            ansewr.innerHTML="message successfuly sent"
            document.querySelector("#names").value="";
            document.querySelector("#email").value="";
            document.querySelector("#phone").value="";
            document.querySelector("#message").value=""
        })
        .catch((error)=>{
            ansewr.innerHTML="message not sent"
        })
 })