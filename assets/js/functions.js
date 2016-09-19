$( document ).ready(function() {

    smoothScroll(1000);

});


function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
        
        var target = $( $(this).attr('href') );
        
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

$('.aboutme-link').click(function(e){
   $('.aboutme-link').css("color", "#424242");
    $(this).css("color", "#EBEBEB");
    $(this).css("text-decoration", "none");
});

$('.project-link').click(function(e){
   $('.project-link').css("color", "#424242");
    $(this).css("color", "#EBEBEB");
    $(this).css("text-decoration", "none");
});

$('.contact-link').click(function(e){
   $('.contact-link').css("color", "#424242");
    $(this).css("color", "#EBEBEB");
    $(this).css("text-decoration", "none");
});

$('.social-media-link').click(function(e){
   $('.social-media-link').css("color", "#424242");
    $(this).css("color", "#EBEBEB");
    $(this).css("text-decoration", "none");
});


$(function($){
        var addToAll = false;
        var gallery = true;
        var titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function(){
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery)
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });
    $.noConflict();