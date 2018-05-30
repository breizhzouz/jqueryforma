'use strict';

$(function () {


    let listInputs = $('.formulaire [data-default]');
    let listReq = $('.formulaire [required]');

    listInputs.each(function () {

        $(this).val($(this).attr('data-default'));

    });
    // triple egal test type et valeur, double juste la valeur
    listInputs.focus(function () {
        if ($(this).val() === $(this).attr('data-default')) {
            $(this).val('');
        }
    });

    listInputs.blur(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('data-default'));
            if ($(this).prop('required')) {
                $(this).siblings('.formulaire .validation').addClass('icon-close');
            }
        } else {

            $(this).siblings('.formulaire .validation').removeClass('icon-close').addClass('icon-check');

        }
    });

    $('.formulaire').submit(function () {

        let valid = true;
        listReq.each(function () {
            if ($(this).val() === $(this).attr('data-default')) {
                $(this).siblings('.formulaire .validation').addClass('icon-close');
                valid = false;
            }

        });

        if (valid) {
            //envoi du form
            $.ajax({
                method: 'POST',
                url: 'envoi-form.php',
                //url: 'https://renicmt8.equant.com/api/api_g39.nsf/Grefapi?openagent',

                data: $('.formulaire').serialize()
            }).done(function (msg) {
             //   alert('reponse : ' + msg);
                if (msg === 'yes') {
                    $('formulaire .success').text('email envoyé avec succès!').show();
                }else{
                    $('formulaire .alert').text('email foiré!').show();
                }
            });
        }

        return false;

    });




}); // pas touche