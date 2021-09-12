//Connecting to submit button
const register = document.getElementById('register')
register.addEventListener('click',()=>{userRegister();})

//User database defined/connected
const userList =[
    {id:1, firstname:`mike`, lastname:`jakson`, email:'mikejakson@newmail.com', address:`101 new street kew vic`, password:`111`},
    {id:2, firstname:`arnold`, lastname:`jack`, email:'arnoldj@newmail.com', address:`1 my street coburg vic`, password:`222`},
    {id:3, firstname:`kate`, lastname:`chen`, email:'katec@newmail.com', address:`313 old street frankston vic`, password:`333`},
    {id:4, firstname:`lilian`, lastname:`zhou`, email:'lzhou@newmail.com', address:`19 this street melton vic`, password:`444`},
    {id:5, firstname:`david`, lastname:`brian`, email:'davidbrian@newmail.com', address:`2/91 grand street geelong vic`, password:`555`},
    {id:6, firstname:`bonnie`, lastname:`hudson`, email:'bhudson@newmail.com', address:`35 vistory street preston vic`, password:`666`},
    {id:7, firstname:`tina`, lastname:`alan`, email:'tinaalan@newmail.com', address:`135 james street fairfield vic`, password:`777`},
]


//User data validation function
const userValidate = (nud)=>{
    // console.log(`Validation started.....`)
    if(!nud.firstname) {window.alert(`Please enter your First name`); return true;}
    if(!nud.lastname) {window.alert(`Please enter your Last name`); return true;}
    if(!nud.email) {window.alert(`Please enter your Email`); return true;}
    if(!nud.address) {window.alert(`Please enter your Complete Address`); return true;}
    if(!nud.email.includes(`@`)) {window.alert(`Please check your email`); return true;}
    if(!nud.password1) {window.alert(`Please enter your Password`); return true;}
    if(!nud.password2) {window.alert(`Please Confirm your Password`); return true;}
    if(nud.password1 !== nud.password2)  {window.alert(`Password mismatched, please re enter Password`); return true;}
    
    
    //checking if user already exists
    for(i=0; i<userList.length; i++){
        //console.log(`\nchecking ${userList[i][`email`]} vs ${nud.email}`)
        if(userList[i][`email`] === nud.email){
            window.alert(`User already exists`); return true;
        }
    }


}


//User Registration function
const userRegister = ()=>{
    
    //Getting fresh link to field values as enttered by user
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let password1 = document.getElementById('password1').value
    let password2 = document.getElementById('password2').value

    let newuserdata = {firstname, lastname, email, address, password1, password2}
    
    // Validating New User Data....if true user already exists.
    if (userValidate(newuserdata)) return;


    //console.log(`Validation Completed successfully`)
    newuserdata = {firstname, lastname, email, address, password1}    
    userList.push(newuserdata)
    
    window.alert(`Registration Successful.`)
    
    //Redirect to user dashboard or as desired.
    window.location.reload('index.html')
    //window.location.replace(`http://www.google.com`)
    
}
