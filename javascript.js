let hscore = 0;
let cscore = 0;
const divv = document.createElement("div");
document.body.appendChild(divv);
let human = "";
let comp = "";

btn1.addEventListener("click", () => {
  human = "r"
  winner();
});

btn2.addEventListener("click", () => {
  human = "p"
  winner();
});

btn3.addEventListener("click", () => {
  human = "s"
  winner();
});



function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    let str = "";
    if (num == 0){
        str = "r";
    } else if (num == 1){
        str = "p";
    } else if (num == 2){
        str = "s";
    }
    return str;
}

function winner(){
    let comp = getComputerChoice();

    if ((comp == "r" && human == "p") || (human == "r" && comp == "s") || (human == "s" && (comp == "p"))){
        hscore ++;
        console.log("computer says: " + comp + "\nhuman says: " + human + "\nhuman score: " + hscore + "\ncomputer score: " + cscore)
      divv.textContent = "human wins";
    } else if ((comp == "p" && human == "r") || (human == "s" && comp == "r") || (human == "p" && (comp == "s"))){
        cscore ++;
        console.log("computer says: " + comp + "\nhuman says: " + human + "\nhuman score: " + hscore + "\ncomputer score: " + cscore)
      divv.textContent = "computer wins";

    } else if (human == comp){
        console.log("computer says: " + comp + "\nhuman says: " + human + "\nhuman score: " + hscore + "\ncomputer score: " + cscore)
        divv.textContent = "draw";
    } else {
        console.log("must say s, r, or p");
        winner();
    }
}



