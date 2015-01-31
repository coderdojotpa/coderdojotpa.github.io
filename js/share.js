// CREATE A REFERENCE TO FIREBASE
var messagesRef = new Firebase('https://flickering-torch-4353.firebaseio.com/msg');

// REGISTER DOM ELEMENTS
var messageField = $('#website');
var nameField = $('#name');
var messageList = $('#example-messages');
var sendData = function() {
    var username = nameField.val();
    var message = messageField.val();
    var newData = {name:username, text:message, timestamp:Firebase.ServerValue.TIMESTAMP};
    console.log(newData.text);
    messagesRef.push(newData);
    messageField.val('');
}
// LISTEN FOR KEYPRESS EVENT
messageField.keypress(function (e) {
  if (e.keyCode == 13) {
    sendData();
  }
});

// Add a callback that is triggered for each chat message.
messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  //GET DATA
  var data = snapshot.val();
  var username = data.name || "anonymous";
  var message = data.text;

  //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
  var messageElement = $("<li>");
  var nameElement = $("<strong class='example-chat-username'></strong>");
  nameElement.text(username);
  messageElement.text(message).prepend(nameElement);

  //ADD MESSAGE
  messageList.append(messageElement)

  //SCROLL TO BOTTOM OF MESSAGE LIST
  messageList[0].scrollTop = messageList[0].scrollHeight;
});