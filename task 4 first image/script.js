      let color = false;
      let box = document.querySelector(".bats");
      let xob = document.querySelector(".btt");


      document.querySelector(".bats").addEventListener("click", () => {
        color = !color;
        box.classList = "box";
        if (color) box.style.backgroundColor = '#10C2D8';
        else box.style.backgroundColor = 'white';
      });

      document.querySelector(".btt").addEventListener("click", () => {
        color = !color;
        xob.classList = "box";
        if (color) xob.style.backgroundColor = '#12D2B8';
        else xob.style.backgroundColor = 'white';
      });

      document.querySelector('.btn-').addEventListener("click", () => {
        
          box.classList.toggle("bg-success")
          xob.classList.toggle("bg-success")
      })