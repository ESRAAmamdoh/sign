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

var listsignin=[]

function main(){
    addlist()
   console.log(listsignin)
   clearindex()
 
}

function addlist(){
  var sign_object={
     
        email:email_value.value,
        pass:pass_value.value
    }
    if(checkemail(email_value.value)&&checkepass(pass_value.value)){
        listsignin.push(sign_object)
        document.querySelector('.alr').style.display='none'
    }
    else{
        document.querySelector('.alr').style.display='block'
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

var email_signup=document.getElementById('emailsignup')
var pass_signup=document.getElementById('passsignup')

var name_signup=document.getElementById('nameValue')



var listsignup=[]

function mainSignUp(){
    addListSignUp()
   console.log(listsignup)
   clearindexx()
 
}

function addListSignUp(){
  var signup_object={
     
        email:email_signup.value,
        pass:pass_signup.value,
        
        name:name_signup.value

    }
    if(checkemailsignup(email_signup.value)&&checkpasssignup(pass_signup.value)&&checkename(name_signup.value)){
        listsignup.push(signup_object)
        document.querySelector('.alrt').style.display='none'
    }
    else{
        document.querySelector('.alrt').style.display='block'
    }
   
}
function clearindexx(){
    email_signup.value=""
    pass_signup.value=""
 
    name_signup.value=""
}
function checkemailsignup(email){
    var regex=/^[A-Za-z0-9]{2,20}@gmail.com$/
    return regex.test(email)
}
function checkpasssignup(pass){
    var regex= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    return regex.test(pass)
}
function checkename(name){
    var regex=  /^[a-zA-Z ]{2,30}$/
    return regex.test(name)
}



 