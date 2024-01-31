
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
    // alert("message success fuly sent")
}