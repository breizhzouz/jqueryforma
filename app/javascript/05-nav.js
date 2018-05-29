$(function () {
    // cibler un element du DOM et appeler une methode sur celui ci
    //$('selecteur css').methodejquery(argument ou plus);
    //ecouter des évenement sur un objet du dom
    // $('selecteur css').unEvenement(function () {
    //     //code à executer quand on declanche l'evenement
    // });

    $('.icon-dehaze').click(function () {
        $('nav').slideToggle(1000)  ;    
    });




}); // pas touche