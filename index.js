function addingEventListener() {
const input = document.getElementById("input");

function clickAlert(){
    alert('Iwas clicked!')
}
input.addEventListener('click', clickAlert())
}
