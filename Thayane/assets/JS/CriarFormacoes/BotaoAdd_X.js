document.getElementById("btn-add").addEventListener('click', () => {
    if(document.getElementById("sinal").innerText == "+")
        document.getElementById("sinal").innerText = "x"; 
    else
        document.getElementById("sinal").innerText = "+";
})