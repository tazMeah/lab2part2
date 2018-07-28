"use strict";

// constructor for AddressBook 
function AddressBook () {

    // array to hold the contacts
    this.list = [];

    // function to add to the array
    this.add = function () {

        // get contents of inputs
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let select = document.querySelector("select").value;

        // send the inputs through the Contact constructor
        this.list.push(new Contact(name, email, phone, select));

        refreshList();
        
    }
    this.deleteAt = function (el) {
        let index = (el.getAttribute("id").slice(-1)); // gets id#
        el.parentNode.remove(); // removes ul from DOM
        addressBook.list.splice(el, 1); // removes ul from array
    
    }
}


// initializing the AddressBook object
const addressBook = new AddressBook();




// constructor for Contacts
function Contact (name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation =relation;
}

//select the contacts div
let domContacts = document.querySelector("#contacts");


// global let
let html;


// clears current global, creates html based on current array of objects
function refreshList() {
    html= "";


    for (let i =0; i < addressBook.list.length; i++) {
        html += `<ul class="contacts" id="contact${[i]}">
                    <li>Name: ${addressBook.list[i].name}</li>
                    <li>Email: ${addressBook.list[i].email}</li>
                    <li>Phone: ${addressBook.list[i].phone}</li>
                    <li>Relation: ${addressBook.list[i].relation}</li>
                    <button id="x${[i]}" onclick="addressBook.deleteAt(this)"></button>
                </ul>`;

    }

    document.querySelector("#contacts").innerHTML = html;
}





