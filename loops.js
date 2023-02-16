let counter = document.getElementById('Counter').value;

let strings = "Repeat This";

function loop(){
    while(counter > 0){
        document.getElementById('loopSection').appendChild(strings);
        counter --;
    }
}
