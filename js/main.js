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
