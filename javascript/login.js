
const  loginForm=document.querySelector("#loginFom");

loginForm.addEventListener("submit",function(e){
     e.preventDefault()

     Login()
})

function Login(){
     let email=document.querySelector("#email").value;
     let password=document.querySelector("#password").value

     const users=JSON.parse(localStorage.getItem("users"))||[]
      
     let user=users.find(function(user){
         return user.email===email && user.password===password
     })

     if(!user){
        alert(" Please invalid email or password")
     }else{
        alert("Thanks continue to go on onathe page")
        window.location.href="./admin.html"
     }
}