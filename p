e.preventDefault();
const name1=document.querySelector('#name');
const email =document.querySelector('#email')
const phonenumber =document.querySelector('#phonenumber')
const data={
    name:name1.target.value,
    email:email.target.value,
    contact:phonenumber.target.value
  }

const p=await fetch('http://localhost:8080/api/sendemail',{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
})
