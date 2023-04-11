document.addEventListener('keydown', function (e) {
    document.querySelector('h1').innerHTML = `You pressed ${e.key}`;
    document.querySelector("#keyCodeTxt").innerHTML = `The code is ${e.code}`;  
    document.querySelector("#keyNoTxt").innerHTML = `The KeyCode value is ${e.keyCode}`; 
    console.log(e);
}, false);

