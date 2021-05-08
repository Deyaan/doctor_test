var id = 0;
var docName, email;
var docProfession;
function addItemsToList(docName, email, docProfession) {
  var ul = document.getElementById("list");
  var header = document.createElement("h2");

  var _name = document.createElement("li");
  var _email = document.createElement("li");
  var  _profession = document.createElement("li");
  header.innerHTML = "" + docName;

  _email.innerHTML = "Email: " + email;
  _profession.innerHTML = "Profession: " + docProfession;
  //console.log(docProfession)

  ul.appendChild(header);
  ul.appendChild(_name);
  ul.appendChild(_email);
  ul.appendChild(_profession);
}

function Physio() {
  firebase
    .database()
    .ref("Doctors/" + "Physiotherapists/")
    .once("value", function (snapshot) {
      snapshot.forEach(function (ChildSnapshot) {
        docName = ChildSnapshot.val().Name;
        email = ChildSnapshot.val().Email;
        docProfession = ChildSnapshot.val().Profession;
        addItemsToList(docName, email, docProfession);
      });
    });
    return docProfession;
}
Physio();

function Cardio() {
  firebase
    .database()
    .ref("Doctors/" + "Cardiologists/")
    .once("value", function (snapshot) {
      snapshot.forEach(function (ChildSnapshot) {
        docName = ChildSnapshot.val().Name;
        email = ChildSnapshot.val().Email;
        docProfession = ChildSnapshot.val().Profession;
        addItemsToList(docName, email, docProfession);
      });
    });
}
Cardio();
function DoctorType(docProfession){
    if(docProfession==="Physiotherapists"){
        Physio();
    }
    else if(docProfession=== "Cardiologists"){
        Cardio(); 
      } 
}
//DoctorType(docProfession);
