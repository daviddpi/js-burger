let nomeBurger = document.getElementById("nome-burger");
let addIngredients = document.getElementsByClassName("add-ingredients");
let btnCalcolo = document.getElementById("btn-calcolo");

const listaCoupon = ["BRG20", "MCD20", "FTR20"];

//evento quando clicco sul bottone
btnCalcolo.addEventListener("click",
function(){
    if(nomeBurger.value.length > 0){ //se è stato inserito un nome va avanti altrimenti no
        
        let prezzoBurger = 7;
        let formaggio = document.getElementById("ch-formaggio");
        let uovo = document.getElementById("ch-uovo");
        let mostarda = document.getElementById("ch-mostarda");
        let pomodoro = document.getElementById("ch-pomodoro");
        let lattuga = document.getElementById("ch-lattuga");
        let ketchup = document.getElementById("ch-ketchup");

        //se i prodotti sono selezionati il prezzo aumenta
        if(formaggio.checked){
            prezzoBurger += 3.5;
        }
        if(uovo.checked){
            prezzoBurger += 5;
        }
        if(mostarda.checked){
            prezzoBurger += 2;
        }
        if(pomodoro.checked){
            prezzoBurger += 4;
        }
        if(lattuga.checked){
            prezzoBurger += 2.5;
        }
        if(ketchup.checked){
            prezzoBurger += 1;
        }

        let coupon = document.getElementById("coupon");

        if(coupon.value.length > 0){
            if(coupon.value != coupon.value.toUpperCase() ){
                alert("Devi inserirlo in maiuscolo.");
            }
            if(listaCoupon.includes(coupon.value)){
                prezzoBurger = prezzoBurger * 0.8;
            }
        }
        document.getElementById("prezzo-burger").innerHTML = prezzoBurger.toFixed(2) + " &euro;";

    }else{
        alert("Attenzione non hai inserito il nome, inseriscilo prima di andare avanti.");
    }
});
