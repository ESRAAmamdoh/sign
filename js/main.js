let btn_signin=document.querySelector('.btnSignin');
let btn_signup=document.querySelector('.btnSignup');

let body=document.querySelector('body');

 btn_signup.onclick= function(){
    body.classList.add('slide')
}
btn_signin.onclick= function(){
    body.classList.remove('slide')
}

///////////////////////////////////////
var email_value=document.getElementById('emailsignin')
var pass_value=document.getElementById('passsignin')

var email_signup=document.getElementById('emailsignup')
var pass_signup=document.getElementById('passsignup')

var name_signup=document.getElementById('nameValue')
var email_update=document.getElementById('emailupdate');
var pass_update=document.getElementById('passupdate');
var email_logout=document.getElementById('emaillogout');
var users=[]
if(localStorage.getItem('users')!=null){
    users=JSON.parse(localStorage.getItem('users'))
   
}
else{
    localStorage.setItem('users',JSON.stringify(users))
}

function main(){
    addlist()
  
   clearindex()
 
}

function addlist(){
  var sign_object={
        email:email_value.value,
        pass:pass_value.value
    }
    if(checkemail(email_value.value)&&checkepass(pass_value.value)){
        users=JSON.parse(localStorage.getItem('users'));
        match_arr=users.filter((el)=> el.email==sign_object.email && el.pass == sign_object.pass)
        if(match_arr.length)
        {
            //success
            document.querySelector('.alr').style.display='none'
            document.querySelector('.sucss').style.display='block'
            localStorage.setItem('active',JSON.stringify(sign_object.email))
            window.location.replace("./blank.html")
        }
        else{
            //failed
            document.querySelector('.alr').style.display='block'
            document.querySelector('.sucss').style.display='none'
        }
        
        
    }
    else{
        document.querySelector('.alr').style.display='block'
        document.querySelector('.sucss').style.display='none'
    }
   
}
function logout(){
    active_users=JSON.parse(localStorage.getItem('active'));
    em_index=users.findIndex((el)=> el.email==active_users)
   
    if(em_index>-1){
        users.splice(em_index,1)
       localStorage.setItem('users',JSON.stringify(users))
     active_users="";
    }

}
function updatelist(){
    users=JSON.parse(localStorage.getItem('users'));
    index=users.findIndex((el)=> el.email==email_update.value)
    if(index>-1){
       users[index].pass=pass_update.value;
       localStorage.setItem('users',JSON.stringify(users))
    
        document.querySelector('.alro').style.display='none'
        document.querySelector('.apdate').style.display='block'
    }
    else{
        document.querySelector('.alro').style.display='block'
        document.querySelector('.apdate').style.display='none'
    }
}

function clearindex(){
    email_value.value=""
    pass_value.value=""
}
function checkemail(email){
    var regex=/^[A-Za-z0-9]{2,20}@gmail.com$/
    return regex.test(email)
}
function checkepass(pass){
    var regex= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    return regex.test(pass)
}
///////////////////////////////////////////////////





function mainSignUp(){
    addListSignUp();
    clearindexx();
}

function addListSignUp(){
  var signup_object={
     
        email:email_signup.value,
        pass:pass_signup.value,
        name:name_signup.value

    }
    users=JSON.parse(localStorage.getItem('users'));
    match_arr=users.filter((el)=> el.email==signup_object.email )
    if(match_arr.length){
        console.log("this username already exists");
        document.querySelector('.alrt').style.display='block';
        document.querySelector('.register').style.display='none';
    }
    else if(checkemailsignup(email_signup.value)&&checkpasssignup(pass_signup.value)&&checkename(name_signup.value)){
        users.push(signup_object)
        document.querySelector('.alrt').style.display='none';
        localStorage.setItem('users',JSON.stringify(users))
        document.querySelector('.register').style.display='block';
    }
    else{
        document.querySelector('.register').style.display='none';
        document.querySelector('.alrt').style.display='block';
    }
   
}

function clearindexx(){
    email_signup.value=""
    pass_signup.value=""
 
    name_signup.value=""
}
function checkemailsignup(email){
    var regex=/^[A-Za-z0-9]{2,20}@[a-zA-z0-9]{2}$/
    return true
}
function checkpasssignup(pass){
    var regex= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    return true
}
function checkename(name){
    var regex=  /^[a-zA-Z]{2,30}$/
    return regex.test(name)
}

function handleForm(event) { event.preventDefault(); } 

var form1 = document.getElementById("myForm");
var form2 = document.getElementById("myForm2");
var form3 = document.getElementById("myForm3");

form1.addEventListener('submit', handleForm);
form2.addEventListener('submit', handleForm);
form3.addEventListener('submit', handleForm);

