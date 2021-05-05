var id = 0;
function addItemsToList(name,email,profession){
    var ul = document.getElementById('list');
    var header = document.createElement('h2');

    var _name = document.createElement('li');
    var _email=document.createElement('li');
    var _profession=document.createElement('li');

    header.innerHTML = '' + name;

    _email.innerHTML='Email: '+email; 
    _profession.innerHTML='Profession '+profession;
    ul.appendChild(header);
    ul.appendChild(_name);
    ul.appendChild(_email);
    ul.appendChild(_profession);
}

/*function FetchAllData(){
    firebase.database().ref('Doctors').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let email = ChildSnapshot.val().Email;
                let profession = ChildSnapshot.val().Profession;
                addItemsToList(name,email,profession);
            }
        )
    });
}
FetchAllData();
*/
function Physio(){
    firebase.database().ref('Doctors').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let email = ChildSnapshot.val().Email;
                let profession = ChildSnapshot.val().Profession;
                addItemsToList(name,email,profession);
            }
        )
    });
}
Physio();

/*
function Physio(){
    firebase.database().ref('Doctors').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let email = ChildSnapshot.val().Email;
                let profession = ChildSnapshot.val().Profession;
                addItemsToList(name,email,profession);
            }
        )
    });
}
function Derma(){
    firebase.database().ref('Doctors').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let email = ChildSnapshot.val().Email;
                let profession = ChildSnapshot.val().Profession;
                addItemsToList(name,email,profession);
            }
        )
    });
}

function DoctorType(){
    firebase.database().ref('Doctors').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                profession = ChildSnapshot.val().Profession;
                addItemsToList(profession);
                alert(profession);
            }
        )
    });
    if(profession==="Physiotherapists"){
        Physio();
        console.log("done!!")
    }
    else if(profession=== "Dermatologists"){
        Derma(); 
      } 
}
DoctorType();
*/

/*function DoctorType(){
    if(_profession===)
}

function doctortype(){ 
    // fetch doctor profession form firebase databse 
    //if(_profession=== "physio"){ fetchphsiodetails();
 }else if(_profession=== derma{
      fetchdermadetails(); 
    } 
} 
function fetch physiodetails()
{ } 
function fetch dermaDetails(){ } doctortype()*/