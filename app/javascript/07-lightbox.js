// 1- ouvrir la lightbox quand on clique sur une image de la lightbox
// 2- 

$(function () {
    let srcimgIndex;
    let srcimgIndex2;
    let nbrSrc;
    nbrSrc = $('.galerie img').length;
    let legendimg

    let listPuces;

    //syntaxt => differente pour appeler les function !
    generatePuces = () => {
        listPuces = '<ul class="list-puces">';
        for (let i = 0; i < nbrSrc; i++) {
            listPuces += '<li></li>';
        }
        listPuces += '</ul>';
        $(".lightbox .cadre").append(listPuces);
    }
    //next before les puces
    activePuce = () => {
        newSrc = $('.galerie img').eq(srcimgIndex).attr('src');
        $('.lightbox img').attr('src', newSrc);
        $('.lightbox ul li').removeClass('puce-active');
        $('.lightbox ul li').eq(srcimgIndex).addClass('puce-active');
        let legendimg = $('.galerie img').eq(srcimgIndex).attr('data-legend');
        $('.lightbox figcaption').text(legendimg);
    };


    generatePuces();


    $('.lightbox ul li').click(function () {
       
        srcimgIndex = $('.lightbox ul li').index($(this));
        let srcimg = $(this).attr('src');
        activePuce();
    });

    $('.galerie img').click(function () {
        
        $('.lightbox').fadeIn(600).css({
            'display': 'flex'
        });
        let srcimg = $(this).attr('src')
        srcimgIndex = $('.galerie img').index($(this));
        activePuce();
    });

    $('.lightbox .icon-close').click(function () {
        $('.lightbox').fadeOut(600);
    });

    $('.lightbox .icon-navigate_before').click(function () {
      
        srcimgIndex = (srcimgIndex - 1) % nbrSrc;
        activePuce();
    });

    $('.lightbox .icon-navigate_next').click(function () {
     
        if (srcimgIndex + 1 >= nbrSrc) {
            srcimgIndex = 0;
        } else {
            srcimgIndex++
        }

        activePuce();

    });
    $('.lightbox').click(function () {
        $(this).fadeOut(500);
    });
    $('.lightbox .cadre').click(function (e) {
        e.stopPropagation();
    });


}); // pas touche