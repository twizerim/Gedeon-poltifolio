
const  loginForm=document.querySelector("#loginFom");

loginForm.addEventListener("submit",function(e){
     e.preventDefault()

     Login()
})

function Login(){
     let email=document.querySelector("#email").value;
     let password=document.querySelector("#password").value

     if(email.length===0){
        const emails=document.querySelector("#erroremail")
        emails.innerHTML="please write your email"
     }else if(password.length===0){
       const pass=document.querySelector("#errorpassword")
       pass.innerHTML="please enter your password"
     }else{
      const users=JSON.parse(localStorage.getItem("users"))||[]
      
      let user=users.find(function(user){
          return user.email===email && user.password===password
      })
 
      if(!user){
         alert(" Please invalid email or password")
      }else{
         alert("Thanks continue to go on onathe page")
         window.location.href="./admin.html"

             document.querySelector("#email").value="";
             document.querySelector("#password").value=""
      }
     }   
}