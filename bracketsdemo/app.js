function complete(){
            var elements = document.getElementsByTagName('p');
            console.log(elements)
            
            for(key in elements){
                elements[key].innerHTML = "Completed"
                console.log(elements[key]);
            }
        }
