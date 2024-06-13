// far funzionare carosello


// inserire da JS i contenuti del carosello
// dati carosello 
const imgArray = [ 
    'img/01.webp' ,
    'img/02.webp' ,
    'img/03.webp' ,
    'img/04.webp' ,
    'img/05.webp' ,
 ];

 // prendo elemento contenitore

 const itemsContainet = document.querySelector(".item-container")

//  estrapolo elementi array img

for (let i = 0; i < imgArray.length; i++) {
    let itemImg = imgArray[i];
    // console.log(itemImg);

    //  creare ad ogni iterazione l'elemento da inserire

    let itemContent = `
            <div class="item">
                <img src="${itemImg}">
            </div>`;

    // inseriamo il nuovo elemento nel contenitore
    itemsContainet.innerHTML += itemContent;
}

// seleziono tutti gli elementi item in pagina
const items = document.getElementsByClassName("item");
// console.log(items);ù

let activeItems = 0;

// mettere classe active al primo elemento
items[0].classList.add("active");
console.log(items[0]);

// selezione il bottone
const next = document.querySelector(".next");
console.log(next);

// gestione al click next

// incremento il valore dell'indice /activeItems

// andiamo a mettere la classe active all elemento corrisoondente all'inidce aggironato