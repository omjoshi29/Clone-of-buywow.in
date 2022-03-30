import footer from'./components/footer.js';
    document.getElementById("footer").innerHTML=footer();
  var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
  console.log(regdUsers);

  document.querySelector("#form").addEventListener("submit", formSubmit);

  var form = document.querySelector("#form");

 
  function formSubmit(event) {
    event.preventDefault();

    var user = form.user.value;
    var pass = form.pass.value;
    console.log(user, pass);

    var flag= false
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].user == user && regdUsers[i].pass == pass) {
        flag=true;
      } else {
        flag=false;
      }
    }
    if(flag==true){

      document
      .querySelector("input[type='submit']")
      .addEventListener("click", function () {
        window.location.href = "index.html";
      });
    }
    else {
      alert("invalid credentials")
    }
  
  }