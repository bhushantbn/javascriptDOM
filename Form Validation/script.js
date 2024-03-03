const submitBtn=document.querySelector('#submit');
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('Lastname')
const dob=document.getElementById('birthDate')
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
submitBtn.addEventListener('click',()=>{
    
    if(firstName.value.length===0 || !firstName.value){
        alert("please enter First Name")
      
        
    }
    else if(lastName.value.length===0 || !lastName.value){
        alert("Please Enter Last Name")
    }
    else if(!dob.value || dob.value.length==0 && !dateRegex.test(dob.value)){
        alert("enter valid birth date")
    }
    else{
        localStorage.setItem=firstName.value;
        localStorage.setItem=lastName.value;
        localStorage.setItem=dob.value;
    }

    
    
})