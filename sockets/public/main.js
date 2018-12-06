//var socket = io.connect('http://localhost:8081',{'forceNew':true});
//var socket = io.connect('http://192.168.1.4:8081',{'forceNew':true});
//var socket = io.connect('http://10.254.193.187:8081',{'forceNew':true});
var socket = io.connect('http://10.150.13.4:8081',{'forceNew':true});
socket.on('messages',function(data){
  console.log(data);
  render(data);
});

function render(data) {
    console.log(data)
    var html = data.map( function(elem,index){
      return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
              </div>`);
           }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
 var payload = {
   author:document.getElementById('username').value,
   text:document.getElementById('texto').value

 };
socket.emit('new-message',payload);
return false;
}
