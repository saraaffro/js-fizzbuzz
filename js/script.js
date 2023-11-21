// selezione container
const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0){
        let fizzbuzz = "fizzbuzz";
        console.log(fizzbuzz);
    }
    else if(i % 3 === 0) {
        let fizz = "fizz";
        console.log(fizz);
    }
    else if(i % 5 === 0) {
        let buzz = "buzz";
        console.log(buzz);
    }
    else{
        console.log(i);
    }
    
}