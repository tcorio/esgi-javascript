function ucfirst(input){
    input = input[0].toUpperCase() + input.substring(1);
    return console.log(input); 
}

function capitalize(input){
    input = input.split(" ");
    var temp = "";
    //Boucler sur le input 
    for (const element of input) {
        temp += element[0].toUpperCase() + element.substring(1) + " ";
    }
    console.log(temp);   
}

function camelCase(input){
    input = input.split(" ");
    var tmp = "";
    //Boucler sur le input 
    for (let element of input) {
        tmp += element[0].toUpperCase() + element.substring(1);
    }
    console.log(tmp);
}

function snakeCase(input){
    var tmp = "";
    //Boucler sur le input 
    for (let element of input) {
        tmp += element.replace(" ","_");
    }
    console.log(tmp);
}

function verlan(input){
    input = input.split(" ");
    var tmp = "";
    //Boucler sur le input 
    for (let element of input) {
        var splitString = element.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        tmp += joinArray+" ";
    }
    console.log(tmp);
     return ""; 
}

function yoda(input){
    var tmp = "";
    input = input.split(" ");
    var reverseArray = input.reverse();
    for (const element of reverseArray) {
        tmp += element + " ";  
    }
    console.log(tmp);  
}

function leet(input){
    input = input.split(" ");
    var tmp = "";

    for (const element of input) {
        for (const iterator of element) {
            
            if(iterator == "A" || iterator == "a"){
                tmp += 4;
            }
            else if(iterator == "E" || iterator == "e"){
                tmp += 3;
            }
            else if(iterator == "I" || iterator == "i"){
                tmp += 1;
            }
            else if(iterator == "O" || iterator == "o"){
                tmp += 0;
            }
            else if(iterator == "U" || iterator == "u"){
                tmp += "_";
            }
            else if(iterator == "Y" || iterator == "y"){
                tmp += 7;
            }
            else {
                tmp += iterator;
            } 
        }
        tmp += " ";
         
    }
    console.log(tmp);
}