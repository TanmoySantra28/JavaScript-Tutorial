const pi=3.14;
let r,p;
document.getElementById("mysubmit").onclick = function ()
{
    r = document.getElementById("rad1").value;
    r = Number(r);
    p = 2*r*pi;
    document.getElementById("myp").textContent = `Perimeter : ${p}`;
} 