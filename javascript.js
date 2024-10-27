let hscore = 0;
let cscore = 0;

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

function getHumanChoice(){
    let ans = prompt("which do you choose? input s, r, or p");
    return ans;
}

function winner(){
    let human = getHumanChoice();
    let comp = getComputerChoice();

    if ((comp == "r" && human == "p") || (human == "r" && comp == "s") || (human == "s" && (comp == "p"))){
        hscore ++;
        console.log("computer says: " + comp + "\nhuman says: " + human + "\nhuman wins\nhuman score: " + hscore + "\ncomputer score: " + cscore)
    } else if ((comp == "p" && human == "r") || (human == "s" && comp == "r") || (human == "p" && (comp == "s"))){
        cscore ++;
        console.log("computer says: " + comp + "\nhuman says: " + human + "\ncomputer wins\nhuman score: " + hscore + "\ncomputer score: " + cscore)
    } else if (human == comp){
        console.log("computer says: " + comp + "\nhuman says: " + human + "\ncomputer wins\nhuman score: " + hscore + "\ncomputer score: " + cscore)
        console.log("draw");
    } else {
        console.log("must say s, r, or p");
        winner();
    }
}


winner();

winner();

winner();

winner();

winner();