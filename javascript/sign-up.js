
const signupForm=document.querySelector("#signupForm");

signupForm.addEventListener("submit",function(e){
     e.preventDefault()
     
     Siginup()
     
})


 function Siginup(){
    
    let firstname=document.querySelector("#firstname").value;
    let lastname=document.querySelector("#lastname").value;
    let email =document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let password=document.querySelector("#password").value;
    let confrimpassword=document.querySelector("#confrimpassword").value

    const users=JSON.parse(localStorage.getItem("users"))||[]

    const person={
         firstname:firstname,
         lastname:lastname,
         email:email,
         phone:phone,
         password:password,
         confrimpassword:confrimpassword
    }

    if(password!==confrimpassword){
      alert("password and confrim password not match")
    }else{
     users.push(person)
     const user=users.find(function(user){
           if(user.email===email){
                alert("please fill you form cellectly")
           }else{
               localStorage.setItem("users",JSON.stringify(users));
               alert("user success fuly created")
           }
     })
    }
 }