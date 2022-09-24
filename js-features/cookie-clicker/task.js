let count = 0;
let i = 0;
let img= document.getElementById("cookie");
let couter = document.getElementById("clicker__counter");
        img.onclick = function () {
            if(i === 0){
            img.width = 400;
            count++;
            couter.innerHTML = count;
            i = 1
            }
            else{
                img.width = 200;
                couter.innerHTML = count;
                i = 0;
            }
        }
        
        
        