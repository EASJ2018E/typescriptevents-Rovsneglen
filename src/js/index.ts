let buttonVare = document.getElementById('Tilføjvareknap');
let inputVare = document.getElementById('NyVareInput') as HTMLInputElement;
let inkøbsListe = document.getElementById('liste');
let counter = 4;

buttonVare.addEventListener("click", AddVare);
function AddVare()
{
    let opret = document.createElement('li');
    opret.setAttribute("id", counter+"");
    let text = document.createTextNode(inputVare.value);
    opret.appendChild(text);
    inkøbsListe.appendChild(opret);
    counter++;
    console.log(opret);
}