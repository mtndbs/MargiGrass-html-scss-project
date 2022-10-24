let form = document.getElementById("my-form");
let formErr = document.getElementById("erros");
let erros = [];
let fErr = "";

console.log(form);

form.addEventListener("submit", (evt) => {
  let { fName, lName, email, phone } = form.elements;
  let tempName = fName.value.trim();
  if (tempName.length < 2) {
    let msg = "You name is wrong";
    erros.push(msg);
    evt.preventDefault();
  }
  let tempNameLname = lName.value.trim();

  if (tempNameLname.length < 2) {
    let msg = "You last name is wrong";
    erros.push(msg);
    evt.preventDefault();
  }

  if (!email.value.includes("@")) {
    let msg = "incorrect email or phone number";
    erros.push(msg);
    evt.preventDefault();
  }

  if (phone.value.length < 8) {
    let msg = "incorrect email or phone number";
    erros.push(msg);
    evt.preventDefault();
  }
  fName.value = " " 
  lName.value = " " 
  phone.value = " " 
  email.value = " "

  if (erros.length > 0) {
    erros.map((err) => {
      formErr.innerHTML += `
<div class="errMsg">
there is a problem with ${err}
</div>
`;
      
    });
  }

  evt.preventDefault();
  console.log("You are good to go");
});


//,lName, email, phone

let fNameInput = document.querySelector("#fName");

fNameInput.addEventListener("keyup", (evt) => {
  let { fName } = form.elements;
  let tempName = fName.value.trim();
  let textLabel = document.querySelector('.text_label');
  
  if (tempName.length < 3) {
    textLabel.innerHTML = "First name: ";
    textLabel.innerHTML += '<span style="color:red;">not long enough</span>';
    console.log("hello label");
    evt.preventDefault();
  } else {
    textLabel.innerHTML = "First name: ";
    textLabel.innerHTML += '<span id="check-off">&nbsp &#10003;</span>';
    evt.preventDefault();
  }
  if (tempName.length < 1) {
    textLabel.innerHTML = "First name: ";}
});



let lNameInput = document.querySelector("#lName");

lNameInput.addEventListener("keyup", (evt) => {
  let { lName } = form.elements;
  let tempName_2 = lName.value.trim();
  let textLabel_2 = document.querySelector('.text_label2');
  
  if (tempName_2.length < 3) {
    textLabel_2.innerHTML = "Last name: ";
    textLabel_2.innerHTML += ' <span style="color:red;">not long enough</span>';
    console.log("hello label");
    evt.preventDefault();
  } else {
    textLabel_2.innerHTML = " Last name:";
    textLabel_2.innerHTML += ' <span id="check-off">&nbsp &#10003</span>';
    evt.preventDefault();
  }
  if (tempName_2.length < 1) {
    textLabel_2.innerHTML = "Last name: ";
  }
});




let emailInput = document.querySelector("#email")

emailInput.addEventListener("keyup", (evt) => {
    let {email} = form.elements;
    let emailLabel = document.querySelector('.email_label');

  if (!email.value.includes("@")) {
    emailLabel.innerHTML = "Email:";
    emailLabel.innerHTML += ' <span style="color:red;">incorrect email , missing @</span>'
    console.log("email");
    evt.preventDefault();
  } else {
    emailLabel.innerHTML = "Email:";
    evt.preventDefault();
  }
  if(email.value.includes(".com")||email.value.includes(".co.il")){
    emailLabel.innerHTML += '<span id="check-off">&nbsp &#10003;</span>';;
  }
  if(email.value.length == 0){
    emailLabel.innerHTML = "Email:";

  }
});


let phoneInput = document.querySelector("#phone");

phoneInput.addEventListener("keyup", (evt) => {
  let { phone } = form.elements;
  let tempName_3 = phone.value.trim();
  let textLabel_3= document.querySelector('.pnumber');
  
  if (tempName_3.length < 10 ) {
    textLabel_3.innerHTML = "Phone number: ";
    textLabel_3.innerHTML += '<span style="color:red;">incorrect dail number</span>';
    console.log("hello label");
    evt.preventDefault();
  } else {
    textLabel_3.innerHTML = "Phone number: ";
    textLabel_3.innerHTML += '<span id="check-off">&nbsp &#10003;</span>';
    evt.preventDefault();
  }
  if(tempName_3.length < 1){
    textLabel_3.innerHTML = "Phone number: ";
  }
})