document.addEventListener("DOMContentLoaded", () => {
    const Regbutton = document.getElementById("Regbutton");

    

    Regbutton.addEventListener("click", () => {
        
        const name = document.getElementById("name").value;
        const RegNumber = document.getElementById("Reg-number").value;
        const roll = document.getElementById("Roll").value;
        const className = document.getElementById("Class").value;
        const age = document.getElementById("Age").value;


    let data = localStorage.getItem("students");
    let studentsArray = data.split("|");

    for (let i = 0; i < studentsArray.length; i++) {
        let details = studentsArray[i].split(",");

        if (details[1] === RegNumber) {
           alert("This Reg. Number allready exist");
           return;
        }
        if(details[3]===className){
            if(details[2]===roll){
                alert("This Roll Number allready exist");
                return;
            }
        }
        
    }
        
        

        // if(details[1] ===RegNumber ){
           
        // }
        // if(details[3]===className){
        //     if(details[2]===roll){
        //         alert("This Roll Number allready exist");
        //     }
        // }

        if (name === "" || RegNumber === "" || roll === "" || className === "" || age === "") {
            alert("All fields are required");
            return;
        }

        const studentData = name + ","+ RegNumber + "," + roll + "," + className + "," + age;

        let allStudents = localStorage.getItem("students");
       

        if (allStudents !== "") {
            allStudents = allStudents + "|" + studentData;
        } else {
            allStudents = studentData;
        }

        localStorage.setItem("students", allStudents);

        alert("Student Registered Successfully");
        window.location.href = "/dashboard.html";
    });
});
