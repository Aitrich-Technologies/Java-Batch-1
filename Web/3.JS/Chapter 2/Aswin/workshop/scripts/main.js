function showForm(buttonVal) {
    if (buttonVal == "myButton1") {  // Skills
        document.getElementById('myTextBox').style.display = 'block';
        document.getElementById('myButton').style.display = 'block';
    } 
    else if (buttonVal == "myButton2") {  // Education
        document.getElementById('eduTextBox').style.display = 'block';
        document.getElementById('eduButton').style.display = 'block';
    }
    else if (buttonVal == "myButton3") {  // Experience
        document.getElementById('expTextBox').style.display = 'block';
        document.getElementById('expButton').style.display = 'block';
    }
    else if (buttonVal == "myButton4") {  // About Me
        document.getElementById('aboutTextBox').style.display = 'block';
        document.getElementById('aboutButton').style.display = 'block';
    }
}

function add(text) {
    if (text == "skill") {
        let data = document.getElementById('myTextBox').value;
        let listId = document.getElementById('skillList');
        let li = document.createElement('li');
        li.textContent = data;
        listId.appendChild(li);
        document.getElementById('myTextBox').value = '';
    } 
    else if (text == "edu") {
        let data = document.getElementById('eduTextBox').value;
        let listId = document.getElementById('eduList');
        let li = document.createElement('li');
        li.textContent = data;
        listId.appendChild(li);
        document.getElementById('eduTextBox').value = '';
    }
    else if (text == "exp") {
        let data = document.getElementById('expTextBox').value;
        let listId = document.getElementById('expList');
        let li = document.createElement('li');
        li.textContent = data;
        listId.appendChild(li);
        document.getElementById('expTextBox').value = '';
    }
    else if (text == "about") {
    let data = document.getElementById('aboutTextBox').value;
    let aboutPara = document.getElementById('aboutText');

  
    if (data.trim() !== "") {
        aboutPara.textContent += " " + data;
    }

    document.getElementById('aboutTextBox').value = '';
}

}
