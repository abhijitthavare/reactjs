//  let perkmforbike=10;
//  let btn1=document.querySelector("#a") 

//   btn1.addEventListener("click",()=>
//   {
//     let input=document.querySelector("#KM").value
//     console.log(input);
//    //  btn1.innerText="hi"

//   })
//     let kilometer=document.getElementById("km").value
//     let amount=(kilometer*perkmforbike).value
//     let div1= getElementById("re1")
//     div1.innerText=amount
//     div1.style.width=100px
//     div1.style.height=30px
//     div1.style.color="black"
    

// })

let btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    let input=document.getElementById("KM").value
    let x=input*10
    let result=document.getElementById("re1")
    result.innerText="amount is "+x
    
})