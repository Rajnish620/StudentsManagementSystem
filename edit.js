document.getElementById("editBtn").addEventListener("click", function () {

    const regNo = document.getElementById("Reg-number").value;
    const data = localStorage.getItem("students");

    if (data === null) {
        alert("No student data found");
        return;
    }

    const studentsArray = data.split("|");
    let foundStudent = null;

    for (let i = 0; i < studentsArray.length; i++) {
        const details = studentsArray[i].split(",");

        if (details[1] === regNo) {
            foundStudent = studentsArray[i];
            break;
        }
    }

    if (foundStudent === null) {
        alert("Student not found");
        return;
    }

    localStorage.setItem("editStudent", foundStudent);

    
    window.location.href = "/EditData.html";
});
