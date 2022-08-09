const navmenu = document.querySelector(".nav-menu")


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.style.position = "sticky"
    navbar.style.background = "rgba(8, 13, 29, 0.926)"
    navbar.style.padding = "0.2rem"
  } else {
    navbar.style.position = "absolute"
    navbar.style.padding = "0rem"
    navbar.style.background = "rgba(8, 13, 29, 0.926)"
  }
}

let show=false
let hghg=true
const ShowMenu =()=>{
  if(hghg){
    navmenu.style.height="100%"
    navmenu.style.top="0"
    hghg=false
  }else{
    navmenu.style.top="-110%"
    navmenu.style.height="0"
    hghg=true
  }
}

const CloseMenu=()=>{
  if(show){
    navmenu.style.top="0"
    navmenu.style.height="100%"
    show=true
  }else{
    navmenu.style.height="0"
    navmenu.style.top="-110%"

    show=false
  }
}

