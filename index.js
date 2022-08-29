const form = document.getElementById("sign-in")


form.addEventListener('submit',(e) => {

    e.preventDefault();
    let error = "";
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const emailAdress = document.getElementById("email-adress");
    const password = document.getElementById("password");
    const errorTextFirstName = document.querySelector(".error-message-first-name")
    const errorTextLastName = document.querySelector(".error-message-last-name")
    const errorTextEmailAdress = document.querySelector(".error-message-email-adress")
    const errorTextPassword = document.querySelector(".error-message-password")
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validEmail  = emailAdress.value

    // console.log(error)

    if(!firstName.value){
        error = firstName.classList.add("error-state")
        errorTextFirstName.style.display = "block"
    }
    if(!lastName.value){
        error = lastName.classList.add("error-state")
        errorTextLastName.style.display = "block"
    }
    if(!validEmail.match(mailFormat)){
        error = emailAdress.classList.add("error-state")
        errorTextEmailAdress.style.display = "block"
        function changeplaceholder(){
            $('email-adress').attr('placeholder','example@abc.com');
        }       
    }
    if(!password.value){
        error = password.classList.add("error-state")
        errorTextPassword.style.display = "block"
    }
    if (error){
        e.preventDefault()
        return false
    }
   
})