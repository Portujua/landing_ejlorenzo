function scrollTo(destination)
{
    $('html, body').animate({
        scrollTop: $(destination).offset().top - 50
    }, 500);
}