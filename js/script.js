console.log("Ca marche bg");

let main = document.createElement("main");
document.body.appendChild(main);
let = affichageCalc = []

/*------------------------------Ecran de calculatrice---------------------------*/

let ecranCalc = document.createElement("div");
ecranCalc.classList.add("ecran-calc");
ecranCalc.innerText = 0;
main.appendChild(ecranCalc);

/*---------------------------------------------------------------interface calculatrice---------------------------------------------------------------------------*/

let interCalc = document.createElement("div");
interCalc.classList.add("inter-calc");
main.appendChild(interCalc);

/*--------------------------------------------Pavé numerique-----------------------------------------------*/
let boxNumCalc = document.createElement("div");
boxNumCalc.classList.add("box-Numcalc");
interCalc.appendChild(boxNumCalc);

for (let i = 9; i >= 0; i--)
{
    let chiffreCalc = document.createElement("button");
    chiffreCalc.classList.add("chiffre-Calc");
    chiffreCalc.innerText = i;
    boxNumCalc.appendChild(chiffreCalc);

    chiffreCalc.addEventListener("click", 
    function saisieChiffre() {
        affichageCalc.push(chiffreCalc.innerText);
        ecranCalc.innerText = affichageCalc.join("");
    });
}

/*------------------------------Creation point--------------------------------*/
let pointCalc = document.createElement("button");
pointCalc.innerText = ".";

pointCalc.classList.add("chiffre-Calc");

boxNumCalc.appendChild(pointCalc);

pointCalc.addEventListener("click", 
function saisiepoint() 
{
    affichageCalc.push( pointCalc.innerText);
    ecranCalc.innerText = affichageCalc.join("");
})

/*-----------------------------Création reset button------------------------*/
let acBtnCalc = document.createElement("button");
acBtnCalc.innerText = "AC";
acBtnCalc.classList.add("ac-btn-calc");
boxNumCalc.appendChild(acBtnCalc);

acBtnCalc.addEventListener("click" , function() {
    ecranCalc = document.querySelector(".ecran-calc");
    affichageCalc = [];
    boxNumCalc.appendChild(acBtnCalc);

    affichageCalc = [];
    ecranCalc.innerText = 0;
}
);


/*--------------------------- Création boite opérateurs--------------------*/
let boxOpeCalc = document.createElement("div");
boxOpeCalc.classList.add("box-ope-calc");
interCalc.appendChild(boxOpeCalc);


/*------------------------------Création operateurs-----------------------------*/

/*-------autre btn---*/
let operateur = ['+' , '-' , '*' ,'/'];
operateur.forEach(signe => {
    let btnSigne = document.createElement("button");
    btnSigne.classList.add("btn-signe");
    btnSigne.innerText= [signe];
    boxOpeCalc.appendChild(btnSigne);

    btnSigne.addEventListener("click" , function() {
    affichageCalc.push(btnSigne.innerText);
    ecranCalc.innerText = affichageCalc.join("");
    });
});

/*--------------------Création div pour btn egale----------------*/
let boxBtnEgal = document.createElement('div');
boxBtnEgal.classList.add("box-btn-egal");
boxOpeCalc.appendChild(boxBtnEgal);
/*------- egal btn----*/
let btnEgal = document.createElement("button");
btnEgal.innerText ="=";
btnEgal.classList.add("btn-egal");
boxOpeCalc.appendChild(btnEgal);


btnEgal.addEventListener("click" , function() {
    
    ecranCalc.innerText = calcul();
}
);



/*--------------------- Calculetteuuuh--------------------------------*/

function calcul(){
    let resultat = eval(affichageCalc.join(""));
    return resultat;

};

/*------------------FOOTER----------------------------------------------*/
let footer = document.createElement("footer");
document.body.appendChild(footer);
console.log(footer);
let p = document.createElement("p");
footer.appendChild(p);
p.innerText = "Fait en 2023 JS HTML CSS";




