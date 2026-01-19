document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector("button");

    loginBtn.addEventListener("click", () => {
        const gmail = document.getElementById("Gmail").value;
        const password = document.getElementById("Password").value;

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (!storedEmail || !storedPassword) {
            alert("Please signup first");
            return;
        }

        if (gmail === storedEmail && password === storedPassword) {
            alert("Login Successful!");
            window.location.href = "/dashboard.html";
        } else {
            alert("Invalid Email or Password");
        }
    });
});
