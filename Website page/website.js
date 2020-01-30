$('#signup').click(function(){
    $('.signup').show(); 
    $('.login').hide();
  M.toast({html: 'Welcome your now connected'})
 });
 $('#login').click(function(){
    $('.login').show(); 
    $('.signup').hide();
   M.toast({html: 'You are connected'})
 });