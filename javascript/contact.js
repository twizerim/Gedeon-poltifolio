
const contact=document.querySelector("#contact");

contact.addEventListener("submit",function(e){
    e.preventDefault()

    Contactme()
})

function Contactme(){
    
    let names=document.querySelector("#names").value;
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let message=document.querySelector("#message").value
    const ansewr=document.querySelector(".solution");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(names.length===0){
        alert("provide your names correctly")
    }else if(!emailRegex.test(email)){
        alert("invalid email")
    }else if(phone.length!==10){
        alert("collect your phene number")
    }else if(message.length===0){
        alert("Please type your message")
    }else{
        const messages=JSON.parse(localStorage.getItem("messages"))||[]
        const contactus={
            names:names,
            email:email,
            phone:phone,
            message:message
        }
        messages.push(contactus)
        localStorage.setItem("messages",JSON.stringify(messages))
        ansewr.innerHTML='message success fuly sent'
    }   
}