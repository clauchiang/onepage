const menu =document.getElementById('menu');

function openFun() {
    document.getElementById("sideNav").style.width = "200px";
    menu.style.display = "none";
  }
  
  function closeFun() {
    document.getElementById("sideNav").style.width = "0";
    menu.style.display = "block";
  }