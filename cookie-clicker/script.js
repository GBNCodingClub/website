let count = 0;
let cps = 0;

let grandmas = 0;

let autoclicker = setInterval(function(){

  count += cps;
  
},1000)


function clickedButton(){
  count++
  document.getElementById("count").innerHTML = count
}

function buyGrandma(){
  if(count >= 50){
    cps++;
    count -= 50;
    grandmas++;
    document.getElementById("grandmas").innerHTML = grandmas
    document.getElementById("count").innerHTML = count

    clearInterval(autoclicker)
    autoclicker = setInterval(function(){
      count += cps;
      document.getElementById("count").innerHTML = count;
    },1000)

  }
}

