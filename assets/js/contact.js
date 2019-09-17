// Métodos CRUD de EMPRESA
function create(){
  firebase.database().ref('contato').push(params());
};
// Auxiliares
function params(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  
  return { name:name.value, email:email.value, message:message.value}
};

// Grid de Companies
firebase.database().ref('contato').on('value',function(snapshot){
  $('#contatoList tbody').html('');
  snapshot.forEach(function(i){
    $('#contatoList tbody').append("<tr><td>"+i.val().name+"</td><td>"+i.val().email+"</td><td>"+i.val().message+"</td></tr>");
  });
});
