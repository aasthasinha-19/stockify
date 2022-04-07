var purchaseprice = document.getElementById("purchase-price");
var currentprice = document.getElementById("current-price");
var quantity = document.getElementById("quantity-stock");
var show = document.getElementById("show");
var button = document.getElementById("check");


function checkProfitorLoss(){
   validateInputs();
    if(Number(currentprice.value)>Number(purchaseprice.value)){
        var profit=(currentprice.value - purchaseprice.value) * quantity.value;
        var profit_percentage = (profit / purchaseprice.value) * 100;
        show.innerText = `you are at a profit of ${profit} and profit percentage is ${profit_percentage.toFixed(
            2
          )}%`;  
    }
    else if (Number(currentprice.value) < Number(purchaseprice.value)) {
        //loss
        var loss = (purchaseprice.value - currentprice.value) * quantity.value;
        var loss_percentage = (loss / purchaseprice.value) * 100;
        show.innerText = `you are at a loss of ${loss} and loss percentage is ${loss_percentage.toFixed(
          2
        )}%`;
    }
    else {
        // no change
        show.innerText = "no pain no gain, no gain no pain"
      }
}
function validateInputs() {
    if (currentprice.value === "" || purchaseprice.value === "" ) {
      show.innerText = `Fields can not be empty`;
    }
  }


