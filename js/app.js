


// naviagtion script
var prevScrollpos = window.scrollY;
window.onscroll = function() {

var currentScrollPos = window.scrollY;

if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
}else if (prevScrollpos > 95){
    document.getElementById("navigation").style.top = "-95px";
}if (prevScrollpos >= 500) {
  let aboutDetails = document.getElementById("about-details");
  let anim1 = document.getElementById("anim1");
  let anim2 = document.getElementById("anim2");
  let anim3 = document.getElementById("anim3");
  let anim4 = document.getElementById("anim4");
  let backTops = document.getElementById('back-totop');
  backTops.classList.add('show-back-top');

  anim1.classList.add("show-anim1");
  anim2.classList.add("show-anim2");
  anim3.classList.add("show-anim3");
  anim4.classList.add("show-anim4");
  aboutDetails.classList.add("show-details");

}else if(prevScrollpos == 510){
    let aboutDetails = document.getElementById("about-details");
    let anim1 = document.getElementById("anim1");
  let anim2 = document.getElementById("anim2");
  let anim3 = document.getElementById("anim3");
  let anim4 = document.getElementById("anim4");
  
  anim1.classList.add("show-anim1");
  anim2.classList.add("show-anim2");
  anim3.classList.add("show-anim3");
  anim4.classList.add("show-anim4");
    aboutDetails.classList.add("show-details");

}else if(prevScrollpos == 800){
  let anim1 = document.getElementById("anim1");
  let anim2 = document.getElementById("anim2");
  let anim3 = document.getElementById("anim3");
  let anim4 = document.getElementById("anim4");

  
  anim1.classList.add("show-anim1");
  anim2.classList.add("show-anim2");
  anim3.classList.add("show-anim3");
  anim4.classList.add("show-anim4");
}else{
  let backTops = document.getElementById('back-totop');
  backTops.classList.remove('show-back-top');
}
prevScrollpos = currentScrollPos;
}




// Show All 
function Appetizers() {
    let burgers = document.getElementsByClassName("burger");
    let main = document.getElementsByClassName("main");
    let piza = document.getElementsByClassName("piza");
    let powerups = document.getElementsByClassName("powerups");
    let dessert = document.getElementsByClassName("dessert");
    let appet = document.getElementsByClassName("appetizers");

  
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.add("hide-burger");
    }
    for (let i = 0; i < appet.length; i++) {
        appet[i].classList.remove("hide-appetizers");
      }
    
    for (let i = 0; i < main.length; i++) {
        main[i].classList.add("hide-main");
    
      }
    for (let i = 0; i < piza.length; i++) {
        piza[i].classList.add("hide-pizza");
    }
    for (let i = 0; i < powerups.length; i++) {
        powerups[i].classList.add("hide-powerups");

    }
    for (let i = 0; i < dessert.length; i++) {
        dessert[i].classList.add("hide-dessert");


    }
  }


  function Burger() {
    let burgers = document.getElementsByClassName("burger");
    let main = document.getElementsByClassName("main");
    let piza = document.getElementsByClassName("piza");
    let powerups = document.getElementsByClassName("powerups");
    let dessert = document.getElementsByClassName("dessert");
    let appet = document.getElementsByClassName("appetizers");

  
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.remove("hide-burger");
    }
    for (let i = 0; i < appet.length; i++) {
        appet[i].classList.add("hide-appetizers");
      }
    for (let i = 0; i < main.length; i++) {
        main[i].classList.add("hide-main");
    
      }
    for (let i = 0; i < piza.length; i++) {
        piza[i].classList.add("hide-pizza");
    }
    for (let i = 0; i < powerups.length; i++) {
        powerups[i].classList.add("hide-powerups");

    }
    for (let i = 0; i < dessert.length; i++) {
        dessert[i].classList.add("hide-dessert");


    }
  }

  function Italian() {
    let burgers = document.getElementsByClassName("burger");
    let main = document.getElementsByClassName("main");
    let piza = document.getElementsByClassName("piza");
    let powerups = document.getElementsByClassName("powerups");
    let dessert = document.getElementsByClassName("dessert");
    let appet = document.getElementsByClassName("appetizers");

  
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.add("hide-burger");
    }
    for (let i = 0; i < appet.length; i++) {
        appet[i].classList.add("hide-appetizers");
      }
    for (let i = 0; i < main.length; i++) {
        main[i].classList.add("hide-main");
    
      }
    for (let i = 0; i < piza.length; i++) {
        piza[i].classList.remove("hide-pizza");
    }
    for (let i = 0; i < powerups.length; i++) {
        powerups[i].classList.add("hide-powerups");

    }
    for (let i = 0; i < dessert.length; i++) {
        dessert[i].classList.add("hide-dessert");


    }
  }


  function Main() {
    let burgers = document.getElementsByClassName("burger");
    let main = document.getElementsByClassName("main");
    let piza = document.getElementsByClassName("piza");
    let powerups = document.getElementsByClassName("powerups");
    let dessert = document.getElementsByClassName("dessert");
    let appet = document.getElementsByClassName("appetizers");

  
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.add("hide-burger");
    }
    for (let i = 0; i < appet.length; i++) {
        appet[i].classList.add("hide-appetizers");
      }
    for (let i = 0; i < main.length; i++) {
        main[i].classList.remove("hide-main");
    
      }
    for (let i = 0; i < piza.length; i++) {
        piza[i].classList.add("hide-pizza");
    }
    for (let i = 0; i < powerups.length; i++) {
        powerups[i].classList.add("hide-powerups");

    }
    for (let i = 0; i < dessert.length; i++) {
        dessert[i].classList.add("hide-dessert");


    }
  }

  function Dessert() {
    let burgers = document.getElementsByClassName("burger");
    let main = document.getElementsByClassName("main");
    let piza = document.getElementsByClassName("piza");
    let powerups = document.getElementsByClassName("powerups");
    let dessert = document.getElementsByClassName("dessert");
    let appet = document.getElementsByClassName("appetizers");

  
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.add("hide-burger");
    }
    for (let i = 0; i < appet.length; i++) {
        appet[i].classList.add("hide-appetizers");
      }
    for (let i = 0; i < main.length; i++) {
        main[i].classList.add("hide-main");
    
      }
    for (let i = 0; i < piza.length; i++) {
        piza[i].classList.add("hide-pizza");
    }
    for (let i = 0; i < powerups.length; i++) {
        powerups[i].classList.add("hide-powerups");

    }
    for (let i = 0; i < dessert.length; i++) {
        dessert[i].classList.remove("hide-dessert");


    }
  }

  function Power() {
    let burgers = document.getElementsByClassName("burger");
    let main = document.getElementsByClassName("main");
    let piza = document.getElementsByClassName("piza");
    let powerups = document.getElementsByClassName("powerups");
    let dessert = document.getElementsByClassName("dessert");
    let appet = document.getElementsByClassName("appetizers");

  
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.add("hide-burger");
    }
    for (let i = 0; i < appet.length; i++) {
        appet[i].classList.add("hide-appetizers");
      }
    for (let i = 0; i < main.length; i++) {
        main[i].classList.add("hide-main");
    
      }
    for (let i = 0; i < piza.length; i++) {
        piza[i].classList.add("hide-pizza");
    }
    for (let i = 0; i < powerups.length; i++) {
        powerups[i].classList.remove("hide-powerups");

    }
    for (let i = 0; i < dessert.length; i++) {
        dessert[i].classList.add("hide-dessert");


    }
  }

  function All() {
    let burgers = document.getElementsByClassName("burger");
    let main = document.getElementsByClassName("main");
    let piza = document.getElementsByClassName("piza");
    let powerups = document.getElementsByClassName("powerups");
    let dessert = document.getElementsByClassName("dessert");
    let appet = document.getElementsByClassName("appetizers");

  
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.remove("hide-burger");
    }
    for (let i = 0; i < appet.length; i++) {
        appet[i].classList.remove("hide-appetizers");
      }
    for (let i = 0; i < main.length; i++) {
        main[i].classList.remove("hide-main");
    
      }
    for (let i = 0; i < piza.length; i++) {
        piza[i].classList.remove("hide-pizza");
    }
    for (let i = 0; i < powerups.length; i++) {
        powerups[i].classList.remove("hide-powerups");

    }
    for (let i = 0; i < dessert.length; i++) {
        dessert[i].classList.remove("hide-dessert");


    }
  }

  





  



// Add active class to the current button (highlight it)
var menuList = document.getElementById("menu-list");
var btns = menuList.getElementsByClassName("choice");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




// show navlink

function showNavlink(){
  let navlinkCont = document.getElementById("navlink");
  let navlinkOverlay = document.getElementById("navlinkOverlay")
  navlinkOverlay.classList.toggle("showNavOverlay");
  navlinkCont.classList.toggle("show-navlink");
}



let menuTab = document.getElementById('menu-tab');
let menuTabList = document.getElementById('menu-list');
let switchTab = document.getElementById('back');

menuTab.addEventListener('click', () => {
  menuList.classList.toggle('show-menu-tab');
  switchTab.classList.toggle('reverse-menu-tab');
  // 

});


function closeNavlink(){
  let navlinkCont = document.getElementById("navlink");
  let navlinkOverlay = document.getElementById("navlinkOverlay")
  navlinkOverlay.classList.remove("showNavOverlay");
  navlinkCont.classList.remove("show-navlink");
}





