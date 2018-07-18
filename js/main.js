if (localStorage.getItem("contacts") == null)
    localStorage.setItem("contacts", JSON.stringify([]));

var tempIndex = -1
viewData();

function addcontact() {
    var contact = getcontact();
    var contacts = getDataFromLocalStorage();
    contacts.push(contact);
    updateDataToLocalStorage(contacts);
    cleardata();
    viewData();

}

function deletecontact(index) {
    var contacts = getDataFromLocalStorage();
    contacts.splice(index, 1)
    updateDataToLocalStorage(contacts);
    viewData();
}

function editcontact(index) {
    var contacts = getDataFromLocalStorage();
    contact = contacts[index];
    tempIndex = index;
    document.getElementById('cname').value = contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('mobile').value = contact.mobile;
    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "block";
    viewData();
}

function updatecontact(index) {
      var contacts = getDataFromLocalStorage();
     contact = getcontact();
    contacts.splice(tempIndex, 1, contact);
    updateDataToLocalStorage(contacts);
    cleardata();
    document.getElementById("add").style.display = "block";
    document.getElementById("update").style.display = "none";
    viewData();
}


function viewData() {
    var contacts = getDataFromLocalStorage();
    console.log(contacts);
    var data = "";
    if (contacts.length == 0) {
        data = "Contacts not yet added.....";
    } else {
        data += "<table id='contacts'>";
        for (var i = 0; i < contacts.length; i++) {
            data += "<tr>";
            data += "<td>" + contacts[i].name + "</td>";
            data += "<td>" + contacts[i].email + "</td>";
            data += "<td>" + contacts[i].mobile + "</td>";
            data += "<td><button id='delete'' onclick=deletecontact(" + i + ")>Delete</td>";
            data += "<td><button id='edit' onclick=editcontact(" + i + ")>Edit</td>";
            data += "</tr>";

        }
        data += "</table>";
       
    }
     document.getElementById("content").innerHTML = data;
}
viewData();

function cleardata() {
    document.getElementById("cname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("mobile").value = '';
}

function getcontact() {
    var name = document.getElementById("cname").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var contact = {
        "name": name,
        "email": email,
        "mobile": mobile,
    };
    return contact;
}

function getDataFromLocalStorage() {
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    return contacts;

}

function updateDataToLocalStorage(updatedData) {
    localStorage.setItem("contacts", JSON.stringify(updatedData));

}
