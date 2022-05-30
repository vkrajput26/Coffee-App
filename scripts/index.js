// Add the coffee to local storage with key "coffee"
let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

let menu=document.getElementById("menu")

fetch(url).then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res)
    let data=res.menu.data
    console.log(data)
    display(data)
})
.catch(function(err){
    console.log(err)
})

let arr=JSON.parse(localStorage.getItem("coffee"))||[];
function display(data){
  data.forEach(function(el){
     let box=document.createElement("div")
     box.setAttribute("id","box")
     box.style.textAlign="center"

     let img=document.createElement("img")
     img.src=el.image;
     img.style.height="186px"

     let name=document.createElement("p")
     name.innerText=el.title;

     let price=document.createElement("p")
     price.innerText=el.price;
     
     let btn=document.createElement("button")
     btn.innerText="Add To Bucket"
     btn.setAttribute("id","add_to_bucket")
     btn.addEventListener("click",function(){
         addtobucket(el)
     })

     box.append(img,name,price,btn)
    menu.append(box)
  })
}

function  addtobucket(el){
    console.log(el)
    arr.push(el)
    localStorage.setItem("coffee",JSON.stringify(arr))
    let count=document.getElementById("coffee_count")
    count.innerText=arr.length
}