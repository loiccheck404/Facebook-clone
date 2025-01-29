let email = document.querySelector("#email");
let btn = document.querySelector("#btn");
let password = document.querySelector("#password");
let error_ = document.querySelector("#error_");
let error__ = document.querySelector("#error__");
let showErr = document.querySelector("#showErr");

function error_msg(msg) {
  error_.innerText = "";
  error__.innerText = msg;
}

function success_msg(msg) {
  error_.innerText = "";
  error__.innerText = msg;
}

function btnDisabled(status = "Log In") {
  btn.classList.add("disabled");
  btn.innerText = status;
}

function resetUI() {
  btn.classList.remove("disabled");
  btn.innerText = "Log In";
}

btn.onclick = () => {
  btnDisabled();
  //success_msg("Processing ...");
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (email.value == "" || !pattern.test(email.value)) {
    error_msg(
      "The email or mobile number you entered isn’t connected to an account. Find your account and log in."
    );
    document.getElementById("email").style.borderColor = "red";

    resetUI();
    return false;
  } else if (password.value == "" || password.value.length < 8) {
    error_msg("The password you’ve entered is incorrect. Forgot Password?");
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("email").style.borderColor = "blue";
    resetUI();
    return false;
  } else window.location.href = "feed.html";
};

addEventListener("keydown", function (e) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (e.key === "Enter") {
    if (email.value == "" || !pattern.test(email.value)) {
      error_msg(
        "The email or mobile number you entered isn’t connected to an account. Find your account and log in."
      );
      document.getElementById("email").style.borderColor = "red";

      resetUI();
      return false;
    } else if (password.value == "" || password.value.length < 8) {
      error_msg("The password you’ve entered is incorrect. Forgot Password?");
      document.getElementById("password").style.borderColor = "red";
      document.getElementById("email").style.borderColor = "blue";
      resetUI();
      return false;
    } else window.location.href = "feed.html";
  }
});
