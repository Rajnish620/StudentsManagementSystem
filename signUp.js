document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector("button");

  signupBtn.addEventListener("click", () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const age = document.getElementById("Age").value;

    const StoreEmail = localStorage.getItem("email");
    const Storepassword = localStorage.getItem("password");

    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      password === "" ||
      age === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (email.endsWith("@gmail.com")) {
    } else {
      alert("....@gmail.com");
      return;
    }
    if (password.length >= 6) {
    } else {
      alert("Password must be at least 6 characters");
      return;
    }

    if (email === StoreEmail) {
      alert("This Email is allready exist");
      window.location.href = "/login.html";
      return;
    }
    localStorage.setItem("fname'''''", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("age", age);

    alert("Signup Successful!");
    signupBtn.style.AnimationOfButton;
    window.location.href = "/login.html";
  });
});
