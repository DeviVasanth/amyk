// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCru47Ku-6v4NgfTAaFNVjabbfUmJroYH0",
    authDomain: "ptest-7f8fc.firebaseapp.com",
    databaseURL: "https://ptest-7f8fc-default-rtdb.firebaseio.com",
    projectId: "ptest-7f8fc",
    storageBucket: "ptest-7f8fc.appspot.com",
    messagingSenderId: "483311931759",
    appId: "1:483311931759:web:00e179d9d65a8adad2d89a"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
     
//End code
  } });  }); }
getData();



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
