
// const  loginForm=document.querySelector("#loginFom");

// loginForm.addEventListener("submit",function(e){
//      e.preventDefault()

//      Login()
// })

// function Login(){
//      let email=document.querySelector("#email").value;
//      let password=document.querySelector("#password").value

//      if(email.length===0){
//         const emails=document.querySelector("#erroremail")
//         emails.innerHTML="please write your email"
//      }else if(password.length===0){
//        const pass=document.querySelector("#errorpassword")
//        pass.innerHTML="please enter your password"
//      }else{
//       const users=JSON.parse(localStorage.getItem("users"))||[]
      
//       let user=users.find(function(user){
//           return user.email===email && user.password===password
//       })
 
//       if(!user){
//          alert(" Please invalid email or password")
//       }else{
//          alert("Thanks continue to go on onathe page")
//          window.location.href="./admin.html"

//              document.querySelector("#email").value="";
//              document.querySelector("#password").value=""
//       }
//      }   
// }

const  loginForm=document.querySelector("#loginFom");

loginForm.addEventListener("submit",function(e){
        e.preventDefault()

        let email=document.querySelector("#email").value;
        let password=document.querySelector("#password").value

        const data={email,password}

        const postman={
         method:"POST",
         headers:{
             "Content-Type": "application/json" 
         },
         body:JSON.stringify(data)
     }
     const API="https://type-bn-poltifolio.onrender.com/Jant/user/login"
     fetch(API,postman)

     .then((resp)=>{
       return resp.json()
     })
     .then((data)=>{
        if(data.token){
          const token=data.token
          localStorage.setItem("token",token)
          if(data.data.user.role=="admin"){
            alert('go to admin page')
             window.location.href="./admin.html"
          }else if(data.data.user.role="user"){

            alert('go to blog page')
            window.location.href="./index.html?#blogs"
          }
          let email=document.querySelector("#email").value="";
         let password=document.querySelector("#password").value=""
        }else{
         alert(data.message)
        }
     })
     .catch((error)=>{
        alert(error)
     })
 
})  

