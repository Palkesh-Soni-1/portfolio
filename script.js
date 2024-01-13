var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer','Competitive Programmer'],
    typeSpeed: 50,
});

const final = document.getElementById("btn");
final.onclick=async function(event){
    console.log("hello")
    event.preventDefault();
const name1=document.querySelector('#name');
const email =document.querySelector('#email')
const phonenumber =document.querySelector('#phonenumber')
const data={
    name:name1.value,
    email:email.value,
    contact:phonenumber.value
  }

const p=await fetch(`https://first-portfolio-7nyf.onrender.com/api/sendemail`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
})
}