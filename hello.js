
function() { 

    try {

        var inputs  = document.querySelectorAll('input');
        for (i = 0; i < inputs.length; i ++ ){ 
            var email = inputs[i].value; 
            if(email.match(/^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0, 66})\\.([a-z]{2, 6}(?:\\.[a-z]{2})?)$/i)){ 
                return email; 
            } 
        }
     

        
    } catch (error) {
        
    }
}

   