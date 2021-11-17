
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
function getData()
{
  firebase.database().ref("/").on('value',)
}

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
