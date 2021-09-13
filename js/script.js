let boutonPlus = document.querySelectorAll('.plus');
let boutonMoins = document.querySelectorAll('.moins');

for (let i = 0; i <boutonPlus.length; i++) {
    boutonPlus[i].addEventListener('click',increaseQuantity);
}
for (let i = 0; i <boutonMoins.length; i++) {
    boutonMoins[i].addEventListener('click',decreaseQuantity);
}
function increaseQuantity(){
   this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1;
   let quantity = parseInt(this.previousElementSibling.value);
   let price = parseInt(this.parentElement.nextElementSibling.innerHTML);
   sousTotal(this, quantity, price)
   total();
}

function decreaseQuantity(){
    if(parseInt(this.nextElementSibling.value) > 0){
        this.nextElementSibling.value =  parseInt(this.nextElementSibling.value) -1;
        let quantity = parseInt(this.nextElementSibling.value);
        let price = parseInt(this.parentElement.nextElementSibling.innerHTML);
        sousTotal(this, quantity, price)
        total();
    }
}
function sousTotal(produit, qantity, prix){
    let sous_Total = qantity * prix;
    produit.parentElement.nextElementSibling.nextElementSibling.innerHTML = sous_Total;
}

function total(){
    let sousTotalAll = document.querySelectorAll('.sous-total');
    let tot = 0;
   for (produit of sousTotalAll){
       tot = tot + parseInt(produit.innerHTML)
   }
   document.querySelector('.total').innerHTML = "Total : " + tot;

}
