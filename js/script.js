let accordion = $('li a');

accordion.click(function() {
    let target = $(this).attr('href');
    $('p').hide();
    $(target).show();
});




let tab = $('.tab-header');

tab.click(function() {
    let tg = $(this).attr('data-target');
    $('.tab-body-content').hide();
    $('.' + tg).show();

});