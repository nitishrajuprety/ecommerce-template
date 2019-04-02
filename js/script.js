$(function() {

    $('.nav-item.dropdown').mouseenter(function() {
        $(this).addClass('show');
        $(this).children('.dropdown-menu').addClass('show');
        $(this).children('.dropdown-toggle').attr('aria-expanded', 'true');
    }).mouseleave(function() {
        $(this).removeClass('show');
        $(this).children('.dropdown-menu').removeClass('show');
        $(this).children('.dropdown-toggle').attr('aria-expanded', 'false');
    });

});