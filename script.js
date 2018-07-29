"use strict";

// constructor for AddressBook 
function AddressBook () {

    // array to hold the contacts
    this.list = [];

    // global let
    let html;

    // clears current global, creates html based on current array of objects
    this.display = () => {
        html= "";

        for (let i = 0; i < addressBook.list.length; i++) {
            html += `<ul class="contacts" id="contact${[i]}">
                        <li>Name: ${addressBook.list[i].name}</li>
                        <li>Email: ${addressBook.list[i].email}</li>
                        <li>Phone: ${addressBook.list[i].phone}</li>
                        <li>Relation: ${addressBook.list[i].relation}</li>         
                        <button id="x${[i]}" onclick="addressBook.deleteAt(this)"></button>
                        <button id="w${[i]}" onclick="addressBook.edit(this)"></button>  
                    </ul>`;

        }

        document.querySelector("#contacts").innerHTML = html;
    }

    // function to add to the array
    this.add = function () {

        // get contents of inputs
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let select = document.querySelector("select").value;

        // send the inputs through the Contact constructor
        this.list.push(new Contact(name, email, phone, select));

        this.display();

        //clears the form
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#phone").value = "";
        document.querySelector("#select").value = "";
        
    }

    this.deleteAt = function (el) {
        let index = (el.getAttribute("id").slice(1)); // gets id#
        el.parentNode.remove(); // removes ul from DOM
        addressBook.list.splice(index, 1); // removes ul from array

         //testing this 12:28am
         this.display();
    
    }

    this.edit = function (el) {
        let index = (el.getAttribute("id").slice(1)); // gets contact index number
        document.querySelector("#name").value = addressBook.list[index].name; // puts contact info back in form to edit
        document.querySelector("#email").value = addressBook.list[index].email;
        document.querySelector("#phone").value = addressBook.list[index].phone;
        document.querySelector("#select").value = addressBook.list[index].relation;

        this.deleteAt(el); // deletes the contact from DOM and array
        
        window.scrollTo(0,0); // scrolls to the form to edit and save info
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







