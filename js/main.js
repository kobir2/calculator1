
function addsEven(){
    document.calculator.display.value+=7;

}
function addEight(){
    document.calculator.display.value+=8;

}
function addNine(){
    document.calculator.display.value+=9;

}
function adddEvider(){
    document.calculator.display.value+= "/";

}

function addFour(){
    document.calculator.display.value+=4;

}

function addFive(){
    document.calculator.display.value+=5;

}

function addSix(){
    document.calculator.display.value+=6;

}

function addMulti(){
    document.calculator.display.value+= '*';

}

function addOne(){
    document.calculator.display.value+=1;
}

function addTwo(){
    document.calculator.display.value+=2;
}

function addThree(){
    document.calculator.display.value+=3;
}

function addSubs(){
    document.calculator.display.value+= '-';
}

function addDot(){
    document.calculator.display.value+='.';
}

function addAddi(){
    document.calculator.display.value+='+';
}

function addClear(){
    document.calculator.display.value='';
}

function addEqual(){
    var  result=eval(document.calculator.display.value);

    document.calculator.display.value = result;
}
