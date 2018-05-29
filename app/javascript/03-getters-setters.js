$(function () {
    // cibler un element du DOM et appeler une methode sur celui ci
    //$('selecteur css').methodejquery(argument ou plus);
    //ecouter des évenement sur un objet du dom
    // $('selecteur css').unEvenement(function () {
    //     //code à executer quand on declanche l'evenement
    // });

    $('button:nth-child(1)').click(function () {
        // le var n'est plus utilisé, c'est le let
        let itemtext = $('ul li:nth-of-type(2)').text();
        $('p').text(itemtext);
    });


    $('button:nth-child(2)').click(function () {
        $('p').text('arrête de chercher tu trouveras rien !');
    });

    $('button:nth-child(3)').click(function () {
        // le var n'est plus utilisé, c'est le let
        let itemhtml = $('ul').html();
        alert(itemhtml);
    });

    $('button:nth-child(4)').click(function () {
        let itemhtml = $('ul').html();
        $('ul').html(itemhtml + '<li>item ajouté</li>');
    });
    
    $('button:nth-child(5)').click(function () {
        let srcimg = $('.img1').attr('src');
        console.log(srcimg);

    });

    $('button:nth-child(6)').click(function () {
        $('.img1').attr('src','img/gal3.jpg'); 
    });
    
    $('button:nth-child(7)').click(function () {
        let valname = $('#name').val();
        console.log(valname);

    });

    $('button:nth-child(8)').click(function () {
        let itemtext = $('ul li:nth-of-type(2)').text();
        $('#name').val(itemtext); 
    });


    $('img').click(function () {
        if( !$(this).hasClass( "img3" )){
            let srcimg = $(this).attr('src');
            $('.img3').attr('src',srcimg);
        }
    });


    $('li').click(function(e){
        e.stopPropagation();
        alert($(this).html());

    });

    // $('.img1').click(function () {
    //     let srcimg = $('.img1').attr('src');
    //   //  $('.img1').attr('src',srcimg); 
    //  //   $('.img2').attr('src',srcimg); 
    //     $('.img3').attr('src',srcimg); 
    // });
    // $('.img2').click(function () {
    //     let srcimg = $('.img2').attr('src');
    //  //   $('.img1').attr('src',srcimg); 
    //  //   $('.img2').attr('src',srcimg); 
    //     $('.img3').attr('src',srcimg); 
    // });
    // $('.img3').click(function () {
    //     let srcimg = $('.img1').attr('src');
    //     if (srcimg=='img/gal1.jpg'){
    //         $('.img1').attr('src','img/gal7.jpg'); 
    //         $('.img2').attr('src','img/gal8.jpg'); 
    //     }else{
    //         $('.img1').attr('src','img/gal1.jpg'); 
    //         $('.img2').attr('src','img/gal2.jpg'); 
    //     }   
    // });



}); // pas touche