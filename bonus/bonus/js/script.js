// selezione container
const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {

       // creo div generico
       const square = document.createElement("div");
       // aggiungo classe square
       square.classList.add("square");
       // aggiungo il div al container
       container.append(square);

    // numeri divisibili per 3 e per 5
    if (i % 3 === 0 && i % 5 === 0){
        let fizzbuzz = "fizzbuzz";
        console.log(fizzbuzz);
        // aggiungo contenuto al div
       square.append(fizzbuzz);
        // aggiungo classe fzbz
        square.classList.add("fzbz");
    }


    // numeri divisibili per 3
    else if(i % 3 === 0) {
        let fizz = "fizz";
        console.log(fizz);
        // aggiungo contenuto al div
       square.append(fizz);
       // aggiungo classe fz
       square.classList.add("fz");
    }


    // numeri divisibili per 5
    else if(i % 5 === 0) {
        let buzz = "buzz";
        console.log(buzz);
        // aggiungo contenuto al div
       square.append(buzz);
       // aggiungo classe bz
       square.classList.add("bz");
    }

    // altri numeri
    else{
        console.log(i);
        // aggiungo contenuto al div
       square.append(i);
       // aggiungo classe nb
       square.classList.add("nb");
    }

 

}