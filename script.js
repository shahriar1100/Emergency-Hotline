// document.getElementById("cardOneCallBtn").addEventListener("click",function(){
//     const cardOneTitle = document.getElementById("cardOneTitle").innerText
//     const cardOneCallNum = document.getElementById("cardOneCallNum").innerText

//     alert(cardOneTitle + " " + "Call: " + cardOneCallNum)
// })

document.querySelectorAll(".call-btn").forEach(button => {
    button.addEventListener("click", function () {
        // coin value update and alert
        const coinBalence = parseInt(document.getElementById("coin").innerText)
        if (coinBalence < 20) {
            alert("your balence is low try agein later")
            return
        }
        const afterCallCoinBalence = coinBalence - 20;
        document.getElementById("coin").innerText = afterCallCoinBalence
        // button click part
        const card = this.closest(".card");
        const title = card.querySelector(".card-title").innerText
        const number = card.querySelector(".card-number").innerText
        alert(`${title} Call: ${number}`)
        // add call history
        const callHistory = document.getElementById("callHistory")
        const div = document.createElement("div")
        const date = new Date().toLocaleTimeString()
        div.innerHTML = `       
      <div class="flex justify-between items-center mb-3 bg-[#FAFAFA] p-4 rounded-xl">
              <div>
              <h3 class="font-semibold text-sm sm:text-base">
                ${title}
              </h3>
              <p class="text-gray-600 text-sm">${number}</p>
            </div>
            <div>
              <p class="text-sm">11:36:58 AM</p>
            </div>
            </div>
        `
        callHistory.appendChild(div)

    })

})

document.querySelectorAll(".fa-heart").forEach(heartIcon => {
    heartIcon.addEventListener("click", function () {
        if (!this.classList.contains("liked")) {
            this.classList.add("liked", "text-red-500", "fa-solid");

            const count = parseInt(document.getElementById("heartIconLife").innerText);
            document.getElementById("heartIconLife").innerText = count + 1;
        }
    })

})

// call history delete
document.getElementById("callHistoryDelete").addEventListener("click", function(){
    const callHistory = document.getElementById("callHistory")
    callHistory.innerHTML = ""
    
})

// when click copy button particular services title copy
document.querySelectorAll(".btn-soft").forEach(copyButton =>{
    copyButton.addEventListener("click",function(){
        const card = this.closest(".card")
        const number = card.querySelector(".card-number").innerText;
        navigator.clipboard.writeText(number)
        alert("Copied: " + number)
        
        const copyCountNumber = parseInt(document.getElementById("copyCountNumber").innerText)
        const copyCountNumberIncr = copyCountNumber + 1
        document.getElementById("copyCountNumber").innerText = copyCountNumberIncr
    })
    
})
// copyCountNumber