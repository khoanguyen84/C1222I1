function showPassword() {
    if (document.getElementsByTagName('input')[0].type == 'password') {
        document.getElementsByTagName('input')[0].type = 'text';
        document.getElementsByTagName('button')[0].innerText = 'Hide';
    }
    else {
        document.getElementsByTagName('input')[0].type = 'password';
        document.getElementsByTagName('button')[0].innerText = 'Show';
    }
}

function setDarkMode() {
    document.getElementsByTagName('p')[0].style.backgroundColor = 'black';
    document.getElementsByTagName('p')[0].style.color = 'white';
}

function clearInput(){
    
    document.getElementById("inp_1").value = "";
}