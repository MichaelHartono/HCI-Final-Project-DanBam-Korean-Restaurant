
function checkEmail(email) {
    let checkAt = email.indexOf("@");
    if (checkAt < 2 || checkAt+5 == email.length) {
        return false;
    }

    let checkDot = email.indexOf(".");
    if(checkDot <= checkAt + 2) {
        return false;
    }

    if (checkDot+2 == email.length) {
        return false;
    }
    
    return true;
}



var form = document.getElementById("form");
form.addEventListener('submit', 
function(event) {
        let name = document.getElementById("name").value.trim()
        let email = document.getElementById("email").value.trim()
        let gender = document.getElementsByName("gender")
        let location = document.getElementById("location").value
        let message = document.getElementById("message").value.trim();



        document.getElementById("errName").innerHTML = "";
        document.getElementById("errEmail").innerHTML = ""; 
        document.getElementById("errGender").innerHTML = "";
        document.getElementById("errLocation").innerHTML = "";
        document.getElementById("errMessage").innerHTML = "";

        let err = 0;
        event.preventDefault();
        if (name.length < 1) {
            document.getElementById("errName").innerHTML = "<p>Please fill in your name!</p>";
            err = 1;
        } 
        
        if (email.length < 1) {
          document.getElementById("errEmail").innerHTML = "<p>Please fill in your email!</p>";
          err = 1;
        } else if (!checkEmail(email)) {
          document.getElementById("errEmail").innerHTML = "<p>Please fill the email correctly! e.g name@gmail.com</p>";
          err = 1;
        } 

        let flag = 0;
        for (let i=0; i<gender.length; i++) {
            if (gender[i].checked) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            document.getElementById("errGender").innerHTML = "<p>Please input your gender!!</p>";
            err = 1;
        } 

        if (location == -1) {
            document.getElementById("errLocation").innerHTML = "<p>Please choose a location!!</p>";
            err = 1;
        }

        if (message.length < 1) {
            document.getElementById("errMessage").innerHTML = "<p>Please fill in your message!</p>";
            err = 1;
        } 


        if (err == 1) {
            return;
        }

        if(confirm("Your Message has been sent!")){
            window.location.reload();
        }
        
    }
)
