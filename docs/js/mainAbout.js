$(document).ready(function(){
           
  //#region 
     
    /* para realizar los cabios del estilo de la pagina */
      function  cambioTheme (Url) {
          /*controlador de theme */  
        let congiThemeC = Url
    
        /*codigo para cambiar el tema de la pagina */
        const theme = document.getElementById('theme')
        const green = $('#to-green')
        const red   = $('#to-red') 
        const blue  = $('#to-blue') 
        
        /* genera el cambio de los fondos */
      function localStorageR(url){
        storagecongiThemeC =  localStorage.setItem('them', url)
        theme.setAttribute('href',url)
      } 
         
       let storagecongiThemeC =  localStorage.setItem('them', congiThemeC)
        green.click(function (e) { 
           e.preventDefault();
           congiThemeC = "css/green.css"
            localStorageR(congiThemeC)
           
        });
        red.click(function (e) { 
          e.preventDefault();
          congiThemeC = "css/red.css"
           localStorageR(congiThemeC)
        });
        
         blue.click(function (e) { 
            e.preventDefault();
            congiThemeC = 'css/blue.css'
             localStorageR(congiThemeC)
        });

        theme.setAttribute('href',congiThemeC)
      }

       if( !(localStorage.getItem('them'))  ){
         let  localvacio = "css/green.css"
          cambioTheme(localvacio)
       }else{
         
         let congilleno = localStorage.getItem('them')
             cambioTheme(congilleno)
       }    
 //#endregion
    
   /********************************************* */


 /* login  falso */

 function generarUser(){
           const login = $('#login');
           const h4    = $('#h4')
           const userObj =  JSON.parse(localStorage.getItem('user'));
           const htmluser =`
              <h4>Bienvenido</h4>   
              <div  id ="dataUser">
                 <p>${userObj.name}</p>
                 <p>${userObj.email}</p>
                 <p><button id="cerrarSesion" class="eventRaton" >Cerrar Sesion</button></p>
              </div>   
           `;
           /**esconde el from */
           login.append(htmluser);
           const form = $("#from");
                 form.hide()
                 h4.hide() 
                 
}
  
function cerrarSesion (){
  $('#cerrarSesion').click(function(e){
    e.preventDefault()
    localStorage.removeItem('user')
    location.reload()
  })
}


 if(!localStorage.getItem('user')){
    const form = document.getElementById("from");
          form.onsubmit = (e) => {
            e.preventDefault();
            const user = {
             name: $('#from #name').val(),
             email: $('#from #email').val(),
             password:$('#from #password').val() ,
            };
            const userJSON = JSON.stringify(user);
             localStorage.setItem('user', userJSON );
             generarUser();
             cerrarSesion()
          }
  }else{
     generarUser()
     cerrarSesion()
  }

 /******************************* */


/* de footer a header */
  $('.subir').click(function(e){
    e.preventDefault()
    $('html , body').animate({
      scrollTop: "0"
    },1200)
    return false  
  }) 

/********************** */
 
 /* estilo de acordion jQueryUI */
  $('#acordeon').accordion();

/*generar la hora */
function darHora(){
  const horaT = setInterval(function(){
    let hora = moment().format('hh:mm:ss');
   reloj.html(hora)
 },500);
   return horaT
 }

 const reloj  = $('#mostarHora');
 const control = $('#controlTime');
 let DarHora = darHora();
 let parar = true
     control.click(function(){
      if(!parar){
          DarHora = darHora()
          parar = true;
          control.html('Detener')
      }else if(parar){
        clearInterval(DarHora);
        parar = false
        control.html('Iniciar')
      }
     })

/************************ */



});

 