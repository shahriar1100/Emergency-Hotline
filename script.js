// document.getElementById("cardOneCallBtn").addEventListener("click",function(){
//     const cardOneTitle = document.getElementById("cardOneTitle").innerText
//     const cardOneCallNum = document.getElementById("cardOneCallNum").innerText

//     alert(cardOneTitle + " " + "Call: " + cardOneCallNum)
// })

document.querySelectorAll(".call-btn").forEach(button =>{
    console.log(button);
    button.addEventListener("click",function(){
        console.log("click");
        const card = this.closest(".card");
        console.log(card);
        const title = card.querySelector(".card-title").innerText
        const number = card.querySelector(".card-number").innerText
        console.log(title);
        console.log(number);
        console.log(`${title} Call: ${number}`)
        alert(`${title} Call: ${number}`)
    })
    
})