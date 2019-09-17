// Métodos CRUD de EMPRESA
function create(){
  fireabase.database().ref('contato').push(params());
};
// Auxiliares
function params(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  
  return { name:name.value, email:email.value, message:message.value}
};
function update(key){
  fireabase.database().ref('companies').child(key).update(params());
};

function destroy(key){
  fireabase.database().ref('companies').child(key).remove();
};

function read(key){
  fireabase.database().ref('companies').child(key).on('value',function(i){
    $('#key').val(i.key);
    $('#company').val(i.val().company);
    $('#address').val(i.val().address);
    $('#phone').val(i.val().phone);
    $('#contact').val(i.val().contact);
  });
};



// Grid de Companies
fireabase.database().ref('companies').on('value',function(snapshot){
  $('#companiesList tbody').html('');
  snapshot.forEach(function(i){
    $('#companiesList tbody').append("<tr><td>"+i.val().company+"</td><td>"+i.val().address+"</td><td>"+i.val().phone+"</td><td>"+i.val().contact+"</td></tr>")
  });
});
