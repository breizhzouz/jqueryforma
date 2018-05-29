$(function () {
    // cibler un element du DOM et appeler une methode sur celui ci
    //$('selecteur css').methodejquery(argument ou plus);
    //ecouter des évenement sur un objet du dom
    // $('selecteur css').unEvenement(function () {
    //     //code à executer quand on declanche l'evenement
    // });

    $('button:nth-child(1)').click(function () {
        $('ul').before('<p>gogogogogogogo</p>')  ;    
    });


    $('button:nth-child(2)').click(function () {
        $('ul').after('<p>je passe toujours en dernier</p>');
    });

    $('button:nth-child(3)').click(function () {
        $('ul').append('<li>item ++</li>');
    });

    $('button:nth-child(4)').click(function () {
        $('ul').prepend('<li>item --</li>');
    });

    $('button:nth-child(5)').click(function () {
        $('ul').prepend('<li>item 1</li>');
    });

    $('button:nth-child(6)').click(function () {
        $('ul').append('<li>item 5</li>');
    });
    

    $('button:nth-child(7)').click(function () {
         let itemtext = $('ul li:first-of-type()').text();
         let lastChar = itemtext.substr(itemtext.length - 1);
         
         if (lastChar != 1){
            let intLast = parseInt(lastChar, 10) ;
            intLast--;
            $('ul').prepend(`<li>item ${intLast}</li>`);
         }else{
            alert('stop');
         }
         
    });
    

    $('button:nth-child(8)').click(function () {
        let itemtext = $('ul li:last-of-type()').text();
        let lastChar = itemtext.substr(itemtext.length - 2);
        
        if (lastChar != 10){
            let intLast = parseInt(lastChar, 10) ;
           intLast++;
           $('ul').append(`<li>item ${intLast}</li>`);
        }else{
           alert('stop');
        }

    });


}); // pas touche