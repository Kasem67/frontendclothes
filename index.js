var btn=document.querySelectorAll(".btnq");
var tshirt=document.getElementById("t-shirts");
var pants = document.getElementById("pants");
var shoes = document.getElementById("shoes");
var suits = document.getElementById("suit");
var belts = document.getElementById("belts");
array=[tshirt, pants, shoes, suits,belts];

for (var i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
     var inner= this.getAttribute("id");
     check(inner);
    });
}

function check(id){
    switch(id){
        case "a":
            
            
            toggling(tshirt);
             break;
        
        case "b":
            
            
            toggling(pants);
            
             break;

        case "c":
            toggling(shoes);
           
             break;

        case "d":
            toggling(suits);
            
             break;

        case "e":
            toggling(belts);
            
             break;
         default:
            break;
    }
}

function toggling(element) {
    array.forEach(function(item) {
      item.classList.remove("visible");
    });
  
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("visible");
      element.classList.add("slide-up");
    } else {
      element.classList.remove("visible");
      element.classList.remove("slide-up");
    }
  }


