function lengthChanged(){
    var paragraphs = document.querySelectorAll('.news-item-description-text');
    paragraphs.forEach(function(paragraph){
        var content = paragraph.textContent;
        if(window.innerWidth < 900){
            if (content.length > 44) {
                var visibleContent = content.slice(0, 44);
                var hiddenContent = content.slice(44);
            } else{
                visibleContent = content;
                hiddenContent = '';
            }
        } else{
            if(content.length > 62){
                var visibleContent = content.slice(0, 62);
                var hiddenContent = content.slice(62);
            } else{
                visibleContent = content;
                hiddenContent = '';
            }
        }
            
            paragraph.innerHTML = visibleContent + '<span class="hidden-content">' + hiddenContent + '</span>';
    });

    var style = document.createElement('style');
    style.innerHTML = `
    .hidden-content {
        display: none;
    }
    `;
    document.head.appendChild(style);
}


document.addEventListener("DOMContentLoaded", lengthChanged);
window.addEventListener('resize', lengthChanged);



// drawer---------------------------------------------
$('.hamburger').on('click', function(){
    $(this).toggleClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});

$('.drawer-bg').on('click', function(){
    $('.hamburger').removeClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});


// smoothScroll----------------------------------------------
$('a[href^="#"]').on('click', function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        scrollTop: position
    }, 300)
});

$('.drawer').find('a[href^="#"]').on('click', function(){
    $('.hamburger').removeClass('active');
    $('.drawer').removeClass('active');
    $('html, body').removeClass('no-scroll');
});
