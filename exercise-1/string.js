function ucfirst(input){
    if(typeof(input) == "string"){
        input = input[0].toUpperCase() + input.substring(1);
        return input; 
    } else {
        return "";
    }
   
}

function capitalize(input){
    if(typeof(input) == "string"){
        input = input.trim().toLocaleLowerCase().split(" ");
        var temp = "";
        //Boucler sur le input 
        for (const element of input) {
            temp += element[0].toUpperCase() + element.substring(1) + " "; 
        }
    } else {
        return "";
    }
    temp = temp.trim();
    return temp;   
}

function camelCase(input){
    if(typeof(input) == "string"){
        var regex = /[^a-zA-Z0-9]/g;
        
        input = input.replace(regex," ");
        console.log(input);
        input = input.split(" ");
        var tmp = "";
        for (let element of input) {
            element = element.toLocaleLowerCase();
            tmp += element[0].toUpperCase() + element.substring(1);
        }
        return tmp;
    } else {
        return "";
    }
}

function snake_case(input){
    if(typeof(input) == "string"){
        input = input.toLocaleLowerCase();
        var tmp = "";
        //Boucler sur le input 
        for (let element of input) {
            tmp += element.replace(" ","_");
        }
        return tmp;
    } else {
        return "";
    }
}

function verlan(input){
    if(typeof(input) == "string"){
        input = input.split(" ");
        var tmp = "";
        //Boucler sur le input 
        for (let element of input) {
            var splitString = element.split("");
            var reverseArray = splitString.reverse();
            var joinArray = reverseArray.join("");
            tmp += joinArray+" ";
        }
        tmp = tmp.trim();
        return tmp; 
    } else {
        return "";
    }
}

function yoda(input){
    if(typeof(input) == "string"){
        var tmp = "";
        input = input.split(" ");
        var reverseArray = input.reverse();
        for (const element of reverseArray) {
            tmp += element + " ";  
        }
        tmp = tmp.trim();
        return tmp;  
    } else {
        return "";
    }
}

function leet(input){
    if(typeof(input) == "string"){
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
                    tmp += "(_)";
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
        tmp = tmp.trim();
        return tmp;
    } else {
        return "";
    }
}

var test = "ToggleCase is_the coolest";
camelCase(test);