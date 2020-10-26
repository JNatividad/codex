

function() {

    try {

        var correo = document.querySelector('#txbCinepolisIdMaster').value;


        var regexT = /\S+@\S+\.\S+/;
        if (regexT.test(correo)) {
            correo = btoa(correo);
            return correo;

            localStorage.setItem('email',btoa(correo))
        } else {
          return false;
        }


    } catch (error) {

    }
}
