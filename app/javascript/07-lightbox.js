// 1- ouvrir la lightbox quand on clique sur une image de la lightbox
// 2- 

$(function () {
    let srcimgIndex;
    let nbrSrc;
    

    $('.galerie img').click(function () {
        $('.lightbox').fadeIn(600).css({
            'display': 'flex'
        });
        let srcimg = $(this).attr('src');
        

        srcimgIndex = $('.galerie img').index($(this));
        newSrc = $('.galerie img').eq(srcimgIndex ).attr('src'); 
        $('.lightbox img').attr('src',newSrc);

 
        
    });

    $('.lightbox .icon-close').click(function () {
        $('.lightbox').fadeOut(600);
    });

    $('.lightbox .icon-navigate_before').click(function () {
       

       //  srcimgIndex = $('.galerie img').index($(this));
       nbrSrc = $('.galerie img').length;
          
       srcimgIndex = ( srcimgIndex -1 ) % nbrSrc;
       console.log(srcimgIndex );
       newSrc = $('.galerie img').eq(srcimgIndex ).attr('src'); 
       $('.lightbox img').attr('src',newSrc);




     //   $('.lightbox').fadeOut(600);
    });

    $('.lightbox .icon-navigate_next').click(function () {
       
        //  srcimgIndex = $('.galerie img').index($(this));
        nbrSrc = $('.galerie img').length;
          
          console.log(srcimgIndex + 1  );
          if (srcimgIndex +1 >= nbrSrc ) {
          srcimgIndex = 0;
          }else{
          srcimgIndex++
          }
  
          console.log(srcimgIndex );
          newSrc = $('.galerie img').eq(srcimgIndex ).attr('src'); 
          $('.lightbox img').attr('src',newSrc);
  
          //$('.lightbox').fadeOut(600);
      });



}); // pas touche