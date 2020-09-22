
const form=document.getElementById('fillform');
const but=document.getElementById('fillcv');
form.addEventListener("submit",onSubmit)


function onSubmit(event){
    event.preventDefault();
    storeUser();
   
}


const fname=document.getElementById('f_name');
const mname=document.getElementById("m_name");
const lname=document.getElementById('l_name');
const email=document.getElementById("email");
const address=document.getElementById("address");
const number=document.getElementById('number');
const gender=document.getElementById("gender");

function storeUser(){
    localStorage.setItem('f_name',fname.value);
    localStorage.setItem('m_name',mname.value);
    localStorage.setItem('l_name',lname.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('address',address).value;
    localStorage.setItem('number',number.value);
    localStorage.setItem('gender',gender.value);
    getinfo();
    
}

function getinfo(){
    const first=localStorage.getItem('f_name');
    const middle=localStorage.getItem('m_name');
    const last=localStorage.getItem('l_name');
    Email=localStorage.getItem('email');
    Address=localStorage.getItem('address');
    contact=localStorage.getItem('number');

    document.getElementById('name').innerHTML =first+' ' + middle + ' '+ last;


   

}

    