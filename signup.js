import footer from'./components/footer.js';
    document.getElementById("footer").innerHTML=footer();
  document.querySelector("#form").addEventListener("submit", myFormSubmit);

  var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
  function myFormSubmit() {
    event.preventDefault();
    var signupObj = {
      email: document.querySelector("#email").value,
      user: document.querySelector("#user").value,
      pass: document.querySelector("#pass").value,
    };
    
    signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signUpDetails", JSON.stringify(signupArr));

    document
      .querySelector("input[type='submit']")
      .addEventListener("click", function () {
        window.location.href = "login.html";
      });
  }