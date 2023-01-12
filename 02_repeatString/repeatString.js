const repeatString = function(string, number) {
    let newString = string;
    if(number<0){
        newString = "ERROR";
        return newString;
    }
    else if(number==0){
        newString = "";
        return newString;   
    }
    else{
    for(let i=1;i<number;i++ ){
   
            newString += string;
    }
    return newString;
    }
}

// Do not edit below this line
module.exports = repeatString;
