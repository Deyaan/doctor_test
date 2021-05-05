const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
var select = "";
const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

//Register user
function RegisterUser() {
  var profession = selected.innerHTML;
  var name = document.getElementById("name").value;
  var email = document.getElementById("r-email").value;
  var password = document.getElementById("r-password").value;
  console.log(profession)
  //physio
  if(profession==="Physiotherapists"){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .then(function () {
      alert("User Register successfully");
       var id = firebase.auth().currentUser.uid;
       var professionRef = firebase.database().ref("Doctors/"+"Physiotherapists/"+id);
      professionRef.set({
      ID: id,
      Name: name,
      Email: email,
      Password: password,
      Profession: selected.innerHTML,
    });
    setTimeout(function () {
      window.location.replace("./doctorsecondpage.html");
    }, 3000);
  })
  .catch(function (error) {
    var errorcode = error.code;
    var errormsg = error.message;
    alert(errormsg);
  });
  }
  //Neuro
  else if(profession==="Neurologists"){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .then(function () {
      alert("User Register successfully");
      var id = firebase.auth().currentUser.uid;
       var professionRef = firebase.database().ref("Doctors/"+"Neurologists/"+id);
    professionRef.set({
      ID: id,
      Name: name,
      Email: email,
      Password: password,
      Profession: selected.innerHTML,
    });
    setTimeout(function () {
      window.location.replace("./doctorsecondpage.html");
    }, 3000);
  })
  .catch(function (error) {
    var errorcode = error.code;
    var errormsg = error.message;
    alert(errormsg);
  });
  }
  //general physician
  else if(profession==="General Physician"){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .then(function () {
      alert("User Register successfully");
      var id = firebase.auth().currentUser.uid;
       var professionRef = firebase.database().ref("Doctors/"+"General Physician/"+id);
    professionRef.set({
      ID: id,
      Name: name,
      Email: email,
      Password: password,
      Profession: selected.innerHTML,
    });
    setTimeout(function () {
      window.location.replace("./doctorsecondpage.html");
    }, 3000);
  })
  .catch(function (error) {
    var errorcode = error.code;
    var errormsg = error.message;
    alert(errormsg);
  });
  }
  //cardio
  else if(profession==="Cardiologists"){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .then(function () {
      alert("User Register successfully");
      var id = firebase.auth().currentUser.uid;
       var professionRef = firebase.database().ref("Doctors/"+"Cardiologists/"+id);
    professionRef.set({
      ID: id,
      Name: name,
      Email: email,
      Password: password,
      Profession: selected.innerHTML,
    });
    setTimeout(function () {
      window.location.replace("./doctorsecondpage.html");
    }, 3000);
  })
  .catch(function (error) {
    var errorcode = error.code;
    var errormsg = error.message;
    alert(errormsg);
  });
  }
  //derma
  else if(profession==="Dermatologists"){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .then(function () {
      alert("User Register successfully");
      var id = firebase.auth().currentUser.uid;
       var professionRef = firebase.database().ref("Doctors/"+"Dermatologists/"+id);
    professionRef.set({
      ID: id,
      Name: name,
      Email: email,
      Password: password,
      Profession: selected.innerHTML,
    });
    setTimeout(function () {
      window.location.replace("./doctorsecondpage.html");
    }, 3000);
  })
  .catch(function (error) {
    var errorcode = error.code;
    var errormsg = error.message;
    alert(errormsg);
  });
  }
  //onco
  else if(profession==="Oncologist"){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .then(function () {
      alert("User Register successfully");
      var id = firebase.auth().currentUser.uid;
       var professionRef = firebase.database().ref("Doctors/"+"Oncologist/"+id);
    professionRef.set({
      ID: id,
      Name: name,
      Email: email,
      Password: password,
      Profession: selected.innerHTML,
    });
    setTimeout(function () {
      window.location.replace("./doctorsecondpage.html");
    }, 3000);
  })
  .catch(function (error) {
    var errorcode = error.code;
    var errormsg = error.message;
    alert(errormsg);
  });
}
//Psychiatrist 
else if(profession==="Psychiatrist"){
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
 .then(function () {
    alert("User Register successfully");
    var id = firebase.auth().currentUser.uid;
     var professionRef = firebase.database().ref("Doctors/"+"Psychiatrist/"+id);
  professionRef.set({
    ID: id,
    Name: name,
    Email: email,
    Password: password,
    Profession: selected.innerHTML,
  });
  setTimeout(function () {
    window.location.replace("./doctorsecondpage.html");
  }, 3000);
})
.catch(function (error) {
  var errorcode = error.code;
  var errormsg = error.message;
  alert(errormsg);
});
}
//Paediatrician
else if(profession==="Paediatrician"){
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
 .then(function () {
    alert("User Register successfully");
    var id = firebase.auth().currentUser.uid;
     var professionRef = firebase.database().ref("Doctors/"+"Paediatrician/"+id);
  professionRef.set({
    ID: id,
    Name: name,
    Email: email,
    Password: password,
    Profession: selected.innerHTML,
  });
  setTimeout(function () {
    window.location.replace("./doctorsecondpage.html");
  }, 3000);
})
.catch(function (error) {
  var errorcode = error.code;
  var errormsg = error.message;
  alert(errormsg);
});
 }
 else{
   alert("Error!!");
 }
}
  /*var name = document.getElementById("name").value;
  var email = document.getElementById("r-email").value;
  var password = document.getElementById("r-password").value;
  var profession = selected.innerHTML;
  console.log(profession);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .then(function () {
      alert("User Register successfully");
      var id = firebase.auth().currentUser.uid;
      var newItem = {
        ID: id,
        Name: name,
        Email: email,
        Password: password,
        Profession: profession,
      };
      firebase
        .database()
        .ref("Doctors")
        .once("value")
        .then(function (snapshot) {
          snapshot.forEach(function (DoctorSnapshot) {
            DoctorSnapshot.child(profession).ref.push(newItem);
          });
        });
      var professionRef = firebase.database().ref("Doctors/" +""+ profession);
      professionRef.set({
        ID: id,
        Name: name,
        Email: email,
        Password: password,
        Profession: selected.innerHTML,
      });
      setTimeout(function () {
        window.location.replace("./doctorsecondpage.html");
      }, 3000);
    })
    .catch(function (error) {
      var errorcode = error.code;
      var errormsg = error.message;
      alert(errormsg);
    });
  */


//login user
function LoginUser() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      alert("User login successfully");
      setTimeout(function () {
        window.location.replace("./doctorsecondpage.html");
      }, 3000);
    })
    .catch(function (error) {
      var errorcode = error.code;
      var errormsg = error.message;
      alert(errormsg);
    });
}
