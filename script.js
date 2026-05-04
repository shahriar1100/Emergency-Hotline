// document.getElementById("cardOneCallBtn").addEventListener("click",function(){
//     const cardOneTitle = document.getElementById("cardOneTitle").innerText
//     const cardOneCallNum = document.getElementById("cardOneCallNum").innerText

//     alert(cardOneTitle + " " + "Call: " + cardOneCallNum)
// })

document.querySelectorAll(".call-btn").forEach(button =>{
    console.log(button);
    button.addEventListener("click",function(){
        // coin value update and alert
        const coinBalence = parseInt(document.getElementById("coin").innerText)
        if(coinBalence < 20){
            alert("your balence is low try agein later")
            return
        }
        const afterCallCoinBalence = coinBalence - 20;
        document.getElementById("coin").innerText = afterCallCoinBalence
        // button click part
        const card = this.closest(".card");
        const title = card.querySelector(".card-title").innerText
        const number = card.querySelector(".card-number").innerText
        console.log(`${title} Call: ${number}`)
        alert(`${title} Call: ${number}`)
        
        
    })
    
})