// seleziono la ul alla quale aggiungere gli li
const ul = document.querySelector(".container ul");

for (let i = 0; i < 100; i++) {
    // creo l'elemento da aggiungere all'index
    const li = document.createElement("li");
    const innerText = li.innerHTML = i + 1;
    // selezione degli elementi con assegnazione della classe speciale
    if((innerText % 15) == 0) {
        li.classList = "red";
        li.innerHTML = "fizzbuzz";
    } else if ((innerText % 3) ==0) {
        li.classList = "green";
        li.innerHTML = "fizz";
    } else if ((innerText % 5) ==0) {
        li.classList = "yellow";
        li.innerHTML = "buzz";
    }
    ul.append(li);
}
