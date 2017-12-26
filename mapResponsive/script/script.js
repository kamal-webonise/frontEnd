var element = document.getElementById("searchAnchor");
var state = document.getElementById("rightContainer");

var element1 = document.getElementById("listAnchor");
var state1 = document.getElementById("leftContainer");

element.onclick = function() 
      {
        if(state.style.display == "block")
          state.style.display="none";
        else
        { 
            state.style.display="block";
            state1.style.display="none";  
        }

      };
element1.onclick = function() 
      {
        if(state1.style.display == "block")
          state1.style.display="none";
        else
        { 
            state1.style.display="block";
            state.style.display="none"; 
        }

      };

const mq = window.matchMedia( "(max-width: 767px)" );

if(mq.matches){
      state1.style.display="block";
      state.style.display="none";
}
else{
      state.style.display="block";
      state1.style.display="block";
      
    }




var width = screen.width;




document.getElementsByTagName("BODY")[0].onresize = function() {myFunction()};

function myFunction() {
    width = screen.width;
      
    if(width>767)
    {
      state.style.display="block";
      state1.style.display="block";
    }
    
}