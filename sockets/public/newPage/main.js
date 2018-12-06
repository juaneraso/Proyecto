//var socket = io.connect('http://localhost:8081',{'forceNew':true});
//var socket = io.connect('http://192.168.1.4:8081',{'forceNew':true});
var socket = io.connect('http://10.150.13.4:8081',{'forceNew':true});


var mensajes=[ 'Que comience el chat!..' ];

socket.on('MCUEventClient',function(data){
 console.log(data);
  mensajes.push(data)
  render(mensajes);
});

socket.on('signalclient',function(data){
  console.log(data);
  mensajes.push(data)
  render(mensajes);
});
socket.on('Datoañadido',function(data){
  console.log(data);
  var msg = `Dato: ${data.datos[data.datos.length -1 ] } Fecha: ${data.fecha[data.fecha.length -1 ] }`
  mensajes.push(msg)
  render(mensajes);

});


/*function render(data) {

    //console.log(data)

    var html = `<div>
            <strong>Mensaje MCU</strong>:
            <em>${data}</em>
            <em> </em>
            </div>`

    document.getElementById('messages').innerHTML = html;
} */

function render(data) {
    console.log(data)
    var html = data.map( function(elem,index){
      return(`<div>
              <strong>Mensaje MCU</strong>:
              <em>${elem}</em>
              </div>`);
           }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
