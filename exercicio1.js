var user = "Astolfo";
var pass = "2023";

function verify(){
    let insertUser = document.getElementById('user').value;
    let insertPass = document.getElementById('pass').value;
    if (insertUser == 'Astolfo' && insertPass == '2023'){
        alert("Senha correta, entrando no sistema...");
        window.location.href = "https://www.youtube.com/watch?v=ISFaJenCMow&t=27s";
    }else {
        alert("Senha incorreta, tente novamente.");
        window.location.href = "index.html";
    }
}