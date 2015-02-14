
var inboo = document.getElementById("inboot");
inboo.style.color = "rgba(9, 9, 93, 0.51)";
inboo.onclick = function ( e ){
    inboo.style.color = "red";
};
var rrr = document.getElementById("rrr");
var cco = 0;
setInterval(function(){
    cco++;
    inboo.innerHTML = cco.toString();
    rrr.setAttribute("x", cco);
}, 1000);


//rrr.style.strokeWidth=100;
//rrr.setAttribute("rx", "5");
//rrr.setAttribute("x", "300");