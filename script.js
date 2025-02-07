let num = [1,2,3,4,5];

function menorOMayor(){
if (num.length < 2){
    console.log("la lista debe tener al menos dos numeros");
    return;
}

for (let i = 1; i < num.length; i++){
    if(num[i] > num[i - 1]){
        console.log(num[i]," es mayor que ", num[i - 1]);
    } else if (num[i] < num[i - 1]){
        console.log(num[i]," es menor que ", num[i - 1])
    } else {
        console.log(num[i]," es igual a ", num[i - 1])
    }
}
}

console.log(menorOMayor())