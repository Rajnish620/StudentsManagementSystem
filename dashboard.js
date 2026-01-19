document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");
    const data = localStorage.getItem("students");

    if (data === null) {
        return;
    }

    const studentsArray = data.split("|");

    for (let i = 0; i < studentsArray.length; i++) {
        const details = studentsArray[i].split(",");

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        const RegCell = document.createElement("td");
        const rollCell = document.createElement("td");
        const classCell = document.createElement("td");
        const ageCell = document.createElement("td");


        nameCell.innerText = details[0];
        RegCell.innerText = details[1];
        rollCell.innerText = details[2];
        classCell.innerText = details[3];
        ageCell.innerText = details[4];

        row.appendChild(nameCell);
        row.appendChild(RegCell);
        row.appendChild(rollCell);
        row.appendChild(classCell);
        row.appendChild(ageCell);

        table.appendChild(row);
    }
});
