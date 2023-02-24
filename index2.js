let color=prompt("enter the color")
let btn=document.querySelector("button")
btn.innerText=color


btn.addEventListener("click", ()=>{
    document.body.style.backgroundColor=color
})