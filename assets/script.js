function getAjax() {
    try {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (try_again) {
                return new ActiveXObject('Microsoft.XMLHTTP');
            }
        }
    } catch (fail) {
        return null;
    }
}


function loadNumber() {
     var rq = getAjax();

     if (rq) {

         try {

             rq.open('GET', 'https://api.democratech.co/v1/payment/candidate/663402096368', true);

             rq.onreadystatechange = function () {
                 if (this.readyState === 4 && this.status < 400) {
                         var jsonObj = JSON.parse(rq.responseText);
                         document.getElementById('nb_participants').innerHTML = "Déjà " + jsonObj.total.toString() + " participants !";

                 }
                 else {
                     document.getElementById('nb_participants').innerHTML = "Déjà 9 participants !";
                 }
             };

             rq.send(null);
         } catch (fail) {
                  document.getElementById('nb_participants').innerHTML = "Déjà 9 participants !";
         }
     } else {
              document.getElementById('nb_participants').innerHTML = "Déjà 9 participants !";
     }
}
