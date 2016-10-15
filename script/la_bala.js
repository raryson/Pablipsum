var chamber = Math.floor(Math.random() * (3 - 1)) + 1;

setTimeout(function(){ 
  if ((chamber == 1)) {
    document.documentElement.style.background='darkblue';
    alert("DESTA VEZ TU PASSA");
    setTimeout(function(){
     window.close();
     },3000);
      
  } else {;
    document.documentElement.style.background='darkred';
    alert("VA A O INFIERNO MI AMIGO")
    setTimeout(function(){ window.close();},3000);
     
  }
  document.body.style.cssText='-webkit-transform:rotate('+chamber*60+'deg);-moz-transform:rotate('+chamber*60+'deg);transform:rotate('+chamber*60+'deg)';

  }, 500);

document.onkeydown = function(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "number")?e.which:e.keyCode;
  if (charCode == 32) {
    document.dispatchEvent(new MouseEvent('click'))
  }
}