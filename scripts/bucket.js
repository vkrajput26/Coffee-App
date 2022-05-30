// On clicking remove button the item should be removed from DOM as well as localstorage.
let data=JSON.parse(localStorage.getItem("coffee"))||[]
console.log(data)

totalprice(data)
function totalprice(data)
{
    let price=data.reduce(function(x,el){
        return x+el.price
    },0)
    console.log(price)
   let count=document.getElementById("total_amount")
   count.innerText=price   
}

//let bucket=document.querySelector("bucket")
data.map(function(el,index){
    let box1=document.createElement("div")
    box1.style.textAlign="center"

    let image=document.createElement("img")
    image.src=el.image
    image.style.height="125px"

    let name=document.createElement("p")
    name.innerText=el.title;

    let pri=document.createElement("p")
    pri.innerText=el.price;

    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener("click",function(){
        removebtn(el,index)
    })

    box1.append(image,name,pri,btn)
   // bucket.append(box1)
    document.querySelector("#bucket").append(box1)

})

    function  removebtn(el,index)
    {
        data.splice(index,1)
        localStorage.setItem("coffee",JSON.stringify(data))
        window.location.reload()
    }