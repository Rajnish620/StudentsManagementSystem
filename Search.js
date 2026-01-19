document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector("button");
    const resultDiv = document.getElementById("result");

    searchBtn.addEventListener("click", () => {
        const regNo = document.getElementById("Reg-number").value;
        const data = localStorage.getItem("students");

        resultDiv.innerHTML = "";

        if (regNo === "") {
            resultDiv.innerHTML = "<p>Please enter Reg. No.</p>";
            return;
        }

        if (data === null) {
            resultDiv.innerHTML = "<p>No student data found</p>";
            return;
        }

        const studentsArray = data.split("|");
        let found = false;

        for (let i = 0; i < studentsArray.length; i++) {
            const details = studentsArray[i].split(",");

            
            if (details[1] === regNo) {
                resultDiv.innerHTML = `
                    <h3>Student Details</h3>
                    <p><strong>Name:</strong> ${details[0]}</p>
                    <p><strong>Reg No:</strong> ${details[1]}</p>
                    <p><strong>Roll:</strong> ${details[2]}</p>
                    <p><strong>Class:</strong> ${details[3]}</p>
                    <p><strong>Age:</strong> ${details[4]}</p>
                `;
                found = true;
                break;
            }
        }

        if (!found) {
            resultDiv.innerHTML = "<p>Student not found</p>";
           
        }
    });
});
