var firebaseConfig = {
    apiKey: "AIzaSyAfSE_PH5XnemaKyJ8d0jtW2zRgL-Cpqbk",
    authDomain: "let-s-chat-f5eec.firebaseapp.com",
    databaseURL: "https://let-s-chat-f5eec-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-f5eec",
    storageBucket: "let-s-chat-f5eec.appspot.com",
    messagingSenderId: "232842524014",
    appId: "1:232842524014:web:cd3052ca51e9408fa9fd7f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addRoom()
   {
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_room.html";
   }

   function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

});
});
}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "chat_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}