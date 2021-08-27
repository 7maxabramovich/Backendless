$(document).ready(function() {

  $('input').click(function() {
    $('input').removeAttr('checked');
    $(this).attr('checked', 'true');
    $('[id="' + $(this).attr('id') + '"').attr('checked', 'true');
    $('body').attr('class', $(this).attr('id'));
  });

  $('label').click(function() {
    let text = $(this).text();
    $('.drop-wrap input').val(text);
  });
  
  $('.drop-wrap').click(function() {
    $('.drop-wrap').next('.drop-wrap-content').slideToggle();
    if ($('.drop-wrap').attr('data-active')) {
      $('.drop-wrap').removeAttr('data-active');
    } else {
      $('.drop-wrap').attr('data-active', 'active');
    }
  });

});