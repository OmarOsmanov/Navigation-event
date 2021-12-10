let option = document.querySelectorAll('option');
        var len = option.length-1;
        document.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            if(len != 0){
                option[len].remove();
                len--;
            }
            else{
                alert('BUTUN SECTIONLAR SILINDI HORMETLI USER!')
            }
        })