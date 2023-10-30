//Commentare la riga qua sotto dopo aver verificato che ci sia l' alert e che quindi sia tutto collegato
//alert("Test di collegamento")

const carica=()=> {
    let oraInserita = document.querySelector("#oraIns");
    alert(oraInserita.value)
    for(let i=0; i<9; i++) {
        alert((i+1)+(oraInserita.value))
    }
    
}