function myfun(event){
    event.preventDefault()
    console.log("vk")
    alert("Your order is accepted ")
    setTimeout(function(){
        alert("Your order is being Prepared ")
        setTimeout(function(){
            alert("Your order is being packed  ")
            setTimeout(function(){
                alert(" Your order is out for delivery ")
                    setTimeout(function(){
                        alert(" Order delivered")
                    },12000)
            },10000)
        },8000)
    },3000)
}