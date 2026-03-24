const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   
  const firstName=document.getElementById("firstName").value; 
let lastName = document.getElementById("lastName").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  let message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`;

  alert(message);

});