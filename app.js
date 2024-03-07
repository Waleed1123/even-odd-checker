var input = document.getElementById("input");
var output = document.getElementById("output")


function checkNbr(){
    var value = input.value;
    if (!value) {
        alert("Enter Number First")
    }
     else if(value % 2 == 0){
        output.innerHTML = `Number is Even`
    } else if(value % 2 !== 0){
        output.innerHTML = `Number is Odd`
    
    }
        

}