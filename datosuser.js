

var Registro = document.getElementById('Registro');
var nick = document.getElementsByName('nick').value;	 
var Contraseña = document.getElementsByName('contraseña')[0].value;
var ordenDeRegistro = ""
Registro.addEventlistenner('cick' User())
function User(nick, ordenDeRegistro, Contraseña) {
  this.nick = nick;
  this.ordenDeRegistro = ordenDeRegistro;
  this.Contraseña = Contraseña;
}


Usuario = new User(nick, ordenDeRegistro, Contraseña)


