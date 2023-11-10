/* 
 Description:    Javascript global
 Author:         Bruno JACQUART
 Author URI:     https://www.teo-web.com
 */

(function($){
    $(document).ready( function(){
// STAR document.ready *********************************************************      

    $('#top-menu, #et_mobile_nav_menu').on('click', '.cta-contact a', function(){
        docHeight = $(window).height();
        $('html,body').animate({scrollTop: 0}, 'slow');
        $('#modal-popin').css('height', docHeight);         
        $('#modal-popin').css('opacity', '1');  
        $('#modal-popin').show('slow');
        $('#modal-popin').css('display','flex');
        return false;
    });

// Fermeture popin
    $('.icon_close').on('click', function(){
        $('#modal-popin').animate({opacity: '0'}, '10000'); 
        $('#modal-popin').css('display', 'none'); 
        
        $( ".popin-item" ).remove();
//        $( ".sendToFriend" ).css('display','none');
//        $('input#vfb-field-27').val('');
//        $('input#vfb-field-28').val('');
//        $('input#vfb-field-21').val('');
//        $('input#vfb-field-19').val('');
//        $('input#vfb-field-20').val('');
//        $('input#vfb-field-18').val('');
//        $('input#vfb-field-17').val('');
    });
    
// END document.ready **********************************************************
    });
})(jQuery); 