//alert('js working!');
 $('#button').click(function(){
  var newItem = '<li>' + $('.form-control').val() + '</li>';
   console.log(newItem);

 $('#selectable').append(newItem);
  
   $('.form-control').val('');
 $('body').on('click', 'li', function() {
     $(this).remove();
 });
 });
 
 $( ".form-control" ).keypress(function() {
  console.log( "Handler for .keypress() called." );
});
