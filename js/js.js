$(document).ready(function() {

  $('input').click(function() {
    $('body').attr('class', $(this).attr('id'));
  });
    
  $('button').click(function(event) {
    $('button').removeAttr('checked');
    $(this).attr('checked', 'true');
    $('[value="' + $(this).attr('value') + '"').attr('checked', 'true');
    $('body').attr('class', `${(event.target.value)}`);
  });
  
  $('select').change(function(event) {
    $('body').attr('class', `${(event.target.value)}`);
  });

});