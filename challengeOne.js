function fizzBuzz(n){
    let random = []
    console.log('wtf')
    for(let i = 1; i < n; i++){
        var temp = '';
        if(i % 3 === 0){
            temp += 'fizz';
        }
        if(i % 5 === 0){
            temp += 'buzz';
        }
        if(temp === ''){
            random.push(i);
        }
        else {
            random.push(temp);
        }
    }
    return random;
}
var test = fizzBuzz(100);
console.log(test);