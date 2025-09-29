function validateForm() {
    const jobTitle = document.getElementById("jobTitle").value.trim();
    const jobDescription = document.getElementById("jobDescription").value.trim();
    const salary = document.getElementById("salary").value.trim();
    const location = document.getElementById("location").value.trim();

    
    const titleRegex = /^[A-Za-z\s]{3,50}$/;      
    const descRegex = /^.{10,200}$/;              
    const salaryRegex = /^[0-9]+(\.[0-9]{1,2})?$/; 
    const locationRegex = /^[A-Za-z\s]{2,50}$/;   

    if (jobTitle === "" || !titleRegex.test(jobTitle)) {
        alert("Job title must be 3–50 letters only.");
        return false;
    }
    if (jobDescription === "" || !descRegex.test(jobDescription)) {
        alert("Description must be between 10 and 200 characters.");
        return false;
    }
    if (salary === "" || !salaryRegex.test(salary)) {
        alert("Salary must be a valid number (e.g., 5000 or 5000.50).");
        return false;
    }
    if (location === "" || !locationRegex.test(location)) {
        alert("Location must be 2–50 letters only.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
