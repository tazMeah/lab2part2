"use strict";
// constructor for AddressBook 
function AddressBook () {
    // array to hold the contacts
    this.list = [];




    // function to add to the array
    this.add = function () {
        // this.list.push(John);
        // console.log(this.list)

        // get contents of inputs
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let select = document.querySelector("select").value;

        // send the inputs through the Contact constructor
        this.list.push(new Contact(name, email, phone, select));
        console.log(this.list);

         
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

// initializing one Contact


// test area


let John = new Contact("John", "email", "7779311", "friend");
let Mike = new Contact("John", "email", "7779311", "friend");
let Brandon = new Contact("John", "email", "7779311", "friend");
let Samantha = new Contact("John", "email", "7779311", "friend");
let Dominique = new Contact("John", "email", "7779311", "friend");
addressBook.list.push(John);


let domContacts = document.querySelector("#contacts");
