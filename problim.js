/*let n = prompt('inter n : ');
function matrix(){
     var matrix = [];
     for(let i = 0; i < n; i++){//rows
        matrix [i] = [];
        for(let x = 0; x < n; x++){//colmn
            matrix [i][x] = parseInt(prompt(`inter matrix row: ${i+1} column: ${n+1}`));
        };
     };
     
     let sum1 = 0 , sum2 = 0;
     for(var i = 0; i < n; i++){
        sum2 += matrix[i][sum1];
        sum1++;
     };

     let geti = 0;
     let m = n - 1;
     for(let i = 0; i < n; i++){
        grti += matrix[i][m];
        j--;
     };

     return Math.abs(sum2 - geti);
}
console.log(matrix());
*********************************************************
 let n = prompt('input prime');
function prime(num){
    
    let ave = '' , c1 = 0, c2 = 0;

    while(num % 2 === 0){
        c1++;
        num /= 2;
    }
    if(c1 > 0)
        ave += (`(` + 2 ` ^ ` + `${c1}` + `)`);

    for(let i = 3; i <= num; i++){
        
        let j = 2;
        while(j < i && i % j !== 0){
            j++;
        }
        if(j === i){

            c2 = 0;
            while(num % i === 0){
                c2++;
                num /= i;
            }
            if(c2 > 0)
                ave += (`(` + i ` ^ ` + `${c1}` + `)`);
        }
    }
    if(c1 === 0)
            ave = ave.substring(1);

    return ave;   
}
prime()


********************************************************
//problim : smaller coins = 100.0 , 25.0 , 10.0 , 5.0
let sum = prompt('Enter the sum of coins:'), numbers = [0, 0, 0, 0], coins = [100, 25, 10, 5];

let i = 0;

while(sum < 0){
    if(sum >= coins[i]){
        numbers[i]++;
        sum -= coins[i];
    }else{
        i++;
    }
}
for(i= 0; i < 4; i++)
    console.log(`( ${coins[i]}.${numbers[i]} )`);
*/