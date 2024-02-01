
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

    const person={
         firstname:firstname,
         lastname:lastname,
         email:email,
         phone:phone,
         password:password,
         confrimpassword:confrimpassword
    }
    if(firstname.length===0){
       const firsterror=document.querySelector("#firstnameError")
        firsterror.innerHTML="please write your firstname"
    }else if(lastname.length===0){
          const lasterror=document.querySelector("#lastnameError")
          lasterror.innerHTML="please write your lastname"
    }else if(email.length===0){
              const emailerror=document.querySelector("#emailError")
               var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               if(!emailRegex.test(email)){
                    emailerror.innerHTML="Invalid email"
               }
               
    }else if(phone.length!==10){
        const phonerror=document.querySelector("#phoneError")
          phonerror.innerHTML='please write your phone number collectly'
    }else if(!/[A-Z]/.test(password)){
        const passworderror =document.querySelector("#passwordError")
        passworderror.innerHTML="please include at least upper case letter"
    }else if(password!==confrimpassword){
        const confrimerror=document.querySelector("#confrimError")
        confrimerror.innerHTML="please password and confrim password miss match"
    }else{
        
       const users=JSON.parse(localStorage.getItem('registeredUsers'))||[]

       if(isUserExists(email,users)){
          alert("User aleady exist")
       }else{
            users.push(person)
            localStorage.setItem("registeredUsers",JSON.stringify(users))
            alert("user successfuly ")
       }

         
    }

   
     
 }
function isUserExists(email, users) {
      // Check if the user already exists in the stored users
      return users.some(function(user) {
        return user.email === email;
      });
    }