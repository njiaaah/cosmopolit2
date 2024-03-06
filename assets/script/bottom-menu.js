$(document).ready(function() {
    $('.menu__item-link').click(function(e) {

        // e.preventDefault(); do i need it?
    
        $('.menu-bottom__item-link_menu').click();
        

        var targetId = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 500); 
    });
});