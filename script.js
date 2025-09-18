
let tasks = [];
    
    document.querySelectorAll("#tasklist li").forEach(li => {
      tasks.push({
        name: li.innerText.trim();
        category: "Work",
        deadline: "2025-09-23",
        status:"pending"
    });
 }); 

 document.getElementById("taskList").innerHTML = "";











//const taskNameInput = document.getElementById("taskName");
//const taskNameInput = document.getElementById("taskName");
//const taskNameInput = document.getElementById("taskName");
//const taskNameInput = document.getElementById("taskName");
//const taskNameInput = document.getElementById("taskName");