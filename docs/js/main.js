$(document).ready(function(){
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'vertical',
          captions: true,
          slideWidth: 1200,
          responsive:true,
        });
      });
            
        //posts
       //<p>
      
       const posts = [
         {
           title:'prueba de titulo 1',
            date: `dia de publicacion: ${moment().format('MMMM')}  el dia ${moment().date()} del ${moment().format('YYYY')}` ,
            content : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam numquam possimus ut consequuntur
            natus quam, saepe facere praesentium laborum exercitationem non soluta amet cumque eveniet
            doloremque nobis quis iusto recusandae?
            Illum, fugit similique ut dolorum autem distinctio quaerat, ex qui, sit quisquam eum vel rerum
            beatae maiores! Ducimus provident quasi odit, iusto ab dolore modi iure nobis. Inventore,
            ratione corporis.
            Consectetur, eligendi rem vero ullam voluptatem voluptatum laborum earum qui, nam assumenda
            culpa! Eos rerum beatae commodi dicta facilis, totam modi sint maxime rem, non, inventore
            debitis impedit reprehenderit explicabo.
            Omnis quaerat, harum illo debitis fuga aliquid quibusdam. Dolorem quidem veniam impedit
            inventore mollitia illum cupiditate in quisquam suscipit, natus laboriosam dolorum excepturi
            exercitationem amet, sed quae maxime laudantium voluptate?`
            /**
             * day() =  numero del dia de la semana
             * date()= numero del dia del mes 
             * 
             */
         },
         {
          title:'prueba de titulo 2',
          date: `dia de publicacion: ${moment().format('MMMM')}  el dia ${moment().date()} del ${moment().format('YYYY')}` ,
          content : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam numquam possimus ut consequuntur
          natus quam, saepe facere praesentium laborum exercitationem non soluta amet cumque eveniet
          doloremque nobis quis iusto recusandae?
          Illum, fugit similique ut dolorum autem distinctio quaerat, ex qui, sit quisquam eum vel rerum
          beatae maiores! Ducimus provident quasi odit, iusto ab dolore modi iure nobis. Inventore,
          ratione corporis.
          Consectetur, eligendi rem vero ullam voluptatem voluptatum laborum earum qui, nam assumenda
          culpa! Eos rerum beatae commodi dicta facilis, totam modi sint maxime rem, non, inventore
          debitis impedit reprehenderit explicabo.
          Omnis quaerat, harum illo debitis fuga aliquid quibusdam. Dolorem quidem veniam impedit
          inventore mollitia illum cupiditate in quisquam suscipit, natus laboriosam dolorum excepturi
          exercitationem amet, sed quae maxime laudantium voluptate?`
         },
         {
          title:'prueba de titulo 3',
          date: `dia de publicacion: ${moment().format('MMMM')}  el dia ${moment().date()} del ${moment().format('YYYY')}` ,
          content : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam numquam possimus ut consequuntur
          natus quam, saepe facere praesentium laborum exercitationem non soluta amet cumque eveniet
          doloremque nobis quis iusto recusandae?
          Illum, fugit similique ut dolorum autem distinctio quaerat, ex qui, sit quisquam eum vel rerum
          beatae maiores! Ducimus provident quasi odit, iusto ab dolore modi iure nobis. Inventore,
          ratione corporis.
          Consectetur, eligendi rem vero ullam voluptatem voluptatum laborum earum qui, nam assumenda
          culpa! Eos rerum beatae commodi dicta facilis, totam modi sint maxime rem, non, inventore
          debitis impedit reprehenderit explicabo.
          Omnis quaerat, harum illo debitis fuga aliquid quibusdam. Dolorem quidem veniam impedit
          inventore mollitia illum cupiditate in quisquam suscipit, natus laboriosam dolorum excepturi
          exercitationem amet, sed quae maxime laudantium voluptate?`
         },
         {title:'prueba de titulo 4',
         date: `dia de publicacion: ${moment().format('MMMM')}  el dia ${moment().date()} del ${moment().format('YYYY')}` ,
         content : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam numquam possimus ut consequuntur
         natus quam, saepe facere praesentium laborum exercitationem non soluta amet cumque eveniet
         doloremque nobis quis iusto recusandae?
         Illum, fugit similique ut dolorum autem distinctio quaerat, ex qui, sit quisquam eum vel rerum
         beatae maiores! Ducimus provident quasi odit, iusto ab dolore modi iure nobis. Inventore,
         ratione corporis.
         Consectetur, eligendi rem vero ullam voluptatem voluptatum laborum earum qui, nam assumenda
         culpa! Eos rerum beatae commodi dicta facilis, totam modi sint maxime rem, non, inventore
         debitis impedit reprehenderit explicabo.
         Omnis quaerat, harum illo debitis fuga aliquid quibusdam. Dolorem quidem veniam impedit
         inventore mollitia illum cupiditate in quisquam suscipit, natus laboriosam dolorum excepturi
         exercitationem amet, sed quae maxime laudantium voluptate?`
        },
        {
          title:'prueba de titulo 5',
            date: `dia de publicacion: ${moment().format('MMMM')}  el dia ${moment().date()} del ${moment().format('YYYY')}` ,
            content : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam numquam possimus ut consequuntur
            natus quam, saepe facere praesentium laborum exercitationem non soluta amet cumque eveniet
            doloremque nobis quis iusto recusandae?
            Illum, fugit similique ut dolorum autem distinctio quaerat, ex qui, sit quisquam eum vel rerum
            beatae maiores! Ducimus provident quasi odit, iusto ab dolore modi iure nobis. Inventore,
            ratione corporis.
            Consectetur, eligendi rem vero ullam voluptatem voluptatum laborum earum qui, nam assumenda
            culpa! Eos rerum beatae commodi dicta facilis, totam modi sint maxime rem, non, inventore
            debitis impedit reprehenderit explicabo.
            Omnis quaerat, harum illo debitis fuga aliquid quibusdam. Dolorem quidem veniam impedit
            inventore mollitia illum cupiditate in quisquam suscipit, natus laboriosam dolorum excepturi
            exercitationem amet, sed quae maxime laudantium voluptate?`
        }
       ]
       //add post HTML  
      posts.forEach((elemt , index) => {
      let HTMLpost = `
        <article class="post">
        <h2>${elemt.title}</h2>
        <span class="fecha">${elemt.date}</span>
        <p>${elemt.content}</p>
        <a href="$" class="buttonMore , eventRaton">Leer mas</a>
        </article>
        ` 
        
        $('#posts').append(HTMLpost)
          
      })  
       
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

      
      
    
   /********************************************* */
      function animacionBTheme(selector){

      }
       

        
});

 