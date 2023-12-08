function registration() {

    let x = document.forms["form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    let num = document.getElementById("num").value;
    alert((num.length === 10 && /^[0-9]+[0-9]{1,9}$/) ? "This is a Valid Number" : "Enter a Valid Number");
    
    password = document.forms["form"]["pass"].value;
    if(password=="")
    {
     alert("please enter your password")
    }

  }

const btn = document.getElementById("btn");
btn.addEventListener("click" , registration);