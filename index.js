let count=0;

function inc(){
    count++;
    document.getElementById("counter").textContent=count;
}
function dec(){
    count--;
    document.getElementById("counter").textContent=count;
}
function res(){
    count=0;
    document.getElementById("counter").textContent=count;
}
