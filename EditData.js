document.addEventListener("DOMContentLoaded", function () {

    const student = localStorage.getItem("editStudent");

    if (student === null) {
        return;
    }

    const details = student.split(",");

    document.getElementById("name").value = details[0];
    document.getElementById("Reg-number").value = details[1];
    document.getElementById("Roll").value = details[2];
    document.getElementById("Class").value = details[3];
    document.getElementById("Age").value = details[4];
});

document.getElementById("saveEdit").addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const regNo = document.getElementById("Reg-number").value;
    const roll = document.getElementById("Roll").value;
    const className = document.getElementById("Class").value;
    const age = document.getElementById("Age").value;

    let data = localStorage.getItem("students");
    let studentsArray = data.split("|");

    for (let i = 0; i < studentsArray.length; i++) {
        let details = studentsArray[i].split(",");

        if (details[1] === regNo) {
            studentsArray[i] =
                name + "," + regNo + "," + roll + "," + className + "," + age;
            break;
        }
    }

    
    let updatedData = studentsArray[0];
    for (let i = 1; i < studentsArray.length; i++) {
        updatedData = updatedData + "|" + studentsArray[i];
    }

    localStorage.setItem("students", updatedData);
    localStorage.removeItem("editStudent");

    alert("Student data updated successfully");
    window.location.href = "/dashboard.html";
});  