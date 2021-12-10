let font = false;
        document.querySelector("button").addEventListener("click", () => 
        {
            font = !font;
            if(font)  document.querySelector("h1").style.fontSize = '40px';
            else document.querySelector("h1").style.fontSize = '10px';
        })



// h1 taginden istifade etdiyim ucun evvel standart h1 olcusunde basligi verir, buttona clik edende sonradan menim verdiyim 
//font sizelar arasinda deyisir