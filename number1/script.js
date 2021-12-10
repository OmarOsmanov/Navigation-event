let radius = document.querySelector("#radius");
        let volume = document.querySelector("#sahe");

        document.querySelector('form').addEventListener("submit", (e) => {
            e.preventDefault();
            let vol = radius.value*radius.value*3.14;
            volume.value = vol;
        })