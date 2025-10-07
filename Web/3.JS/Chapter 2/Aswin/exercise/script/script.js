var employees = [{ name: "Manu", JobRole: "Java Developer", Experience: 3, location: "Banglore", image: "images/manu.png" },
{ name: "Lamiya", JobRole: "Marketing Executive", Experience: 2, location: "Chennai", image: "images/olivia-round.png" },
{ name: "Rachael", JobRole: "HR Manager", Experience: 5, location: "Thiruvananthapuram", image: "images/member (3).png" },
{ name: "Deepak Roy", JobRole: "Java Developer", Experience: 3, location: "Calicut", image: "images/member (2).png" }
];

var empList=document.getElementById("empList");

employees.forEach(function(emp){
    var card=document.createElement("div");
    card.classList.add("card");

    var img=document.createElement("img");
    img.src=emp.image;
    img.alt=emp.name;

    var details=document.createElement("div");
    details.classList.add("details");

    var name=document.createElement("h3");
    name.innerText=emp.name;

    var jobRole=document.createElement("p");
    jobRole.innerText="Job Role: "+ emp.JobRole;

    var experience=document.createElement("p");
    experience.innerText="Experience: "+emp.Experience+" year";

    var loc=document.createElement("p");
    loc.innerText="Location: "+emp.location;

    details.appendChild(name);
    details.appendChild(jobRole);
    details.appendChild(experience);
    details.appendChild(loc);

    card.appendChild(img);
    card.appendChild(details);


    empList.appendChild(card);
});