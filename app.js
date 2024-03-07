let main = document.getElementById("container")
let crsr = document.getElementById("crsr")


// main.addEventListener("mousemove",
//     function ss(a) {
//         console.log(a)
//     }

// )
main.addEventListener("mousemove", function ss(para) {
    console.log(para.y)

    crsr.style.left = para.x + "px"
    crsr.style.top = para.y + "px"
})
