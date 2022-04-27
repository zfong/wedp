setInterval(clock,1000);
function clock(){
  var now = new Date();
  var hour=now.getHours();
  var minute= now.getMinutes();   
  var second=now.getSeconds();  
  document.getElementById('clk').innerHTML= hour + ":" + minute + ":" + second;
}
