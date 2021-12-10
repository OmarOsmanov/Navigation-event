let input = document.querySelector("input");
        input.addEventListener("keyup", ()=>{
            document.querySelector("p").innerHTML = input.value
        })