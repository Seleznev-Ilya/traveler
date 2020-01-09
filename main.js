document.getElementById('buttonH1').onclick = down;
let switchB = 0;
function down() {

    let test = document.getElementById('test');
    if(!switchB){
        switchB = 1;
        test.style.top= `${64}px`;
        test.style.opacity= `${1}`;
    } else{
        switchB = 0;
        test.style.top= `${0}px`;
        test.style.opacity= `${0}`;
    }

}