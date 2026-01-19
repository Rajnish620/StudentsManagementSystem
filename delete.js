document.addEventListener("DOMContentLoaded", () => {
    const deleteBtn = document.getElementById("delete");

    deleteBtn.addEventListener("click", () => {
        const regNo = document.getElementById("Reg-number").value;
        const data = localStorage.getItem("students");

        if (regNo === "") {
            alert("Please enter Reg. No.");
            return;
        }

        if (data === null) {
            alert("No student data found");
            return;
        }

        const studentsArray = data.split("|");
        let newData = "";
        let found = false;

        for (let i = 0; i < studentsArray.length; i++) {
            const details = studentsArray[i].split(",");

           
            if (details[1] !== regNo) {
                if (newData === "") {
                    newData = studentsArray[i];
                } else {
                    newData = newData + "|" + studentsArray[i];
                }
            } else {
                found = true;
            }
        }

        if (!found) {
            alert("Student not found");
            return;
        }

        if (newData === "") {
            localStorage.removeItem("students");
        } else {
            localStorage.setItem("students", newData);
        }

        alert("Student Deleted Successfully");
        window.location.href = "/dashboard.html";
    });
});
