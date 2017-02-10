$(function(){
    $('.menu').click(function(e){
        e.stopPropagation();
        $('.main_nav').stop().slideToggle('slow');
    });
    
    $(document).click ( function () {
        
        $('.main_nav').stop().slideUp('slow');
    })
        .find('.main_nav').click( function (e) {
            e.stopPropagation();
        });

    
    
   
});

    
    
