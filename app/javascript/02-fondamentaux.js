$(function () {
    // cibler un element du DOM et appeler une methode sur celui ci
    //$('selecteur css').methodejquery(argument ou plus);
    //ecouter des évenement sur un objet du dom
    // $('selecteur css').unEvenement(function () {
    //     //code à executer quand on declanche l'evenement
    // });
    $('p').css({
        'background': 'red',
        'color': 'blue',
        'fontStyle': 'bold'
    });

    $('button:nth-of-type(1)').click(function () {
        $('p').hide(3000);
    });

    $('button:first-child').click(function () {
        alert($(this).text());
        // text insde the button target
        // this = element en cours
    });

    $('#btn').dblclick(function() {
        alert('faut me titiller deux fois');
    });

    $('button:nth-child(3)').mouseenter(function() {
        alert('GO ON ME!');
    });

    $('button:nth-child(4)').mouseleave(function() {
        alert('bouhouhou ne me quitte pas!');
    });

    $('button:nth-child(5)').hover(function() {
        console.log('me rentre pas dedans');
    },function(){
        console.log('me pars passssss!');
    });

}); // pas touche