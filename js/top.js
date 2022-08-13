const topBtn = document.getElementById('topBtn');
const bottomBtn = document.getElementById('bottomBtn');

window.onscroll = function() {scrollFun()};

function scrollFun() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
      bottomBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
      bottomBtn.style.display = "none";
    }
  }

function topFun() {
    //滑動到top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bottomFun(){
    //滑動到bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}


  