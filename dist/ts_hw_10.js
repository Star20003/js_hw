"use strict";
//state
const contactsList = [];
//importer
const InputName = document.querySelector('#InputName');
const InputNumber = document.querySelector('#InputNumber');
const StorageStored = document.querySelector('#Storage');
const addContactButton = document.querySelector('#addContactButton');
const ulElement = document.querySelector('#ulElement');
const avatarItem = document.querySelector('#avatarItem');
const showContactsButton = document.querySelector('#showContactsButton');
const contactsDrawer = document.querySelector('#contactsDrawer');
const closeContactsButton = document.querySelector('#closeContactsButton');
//event
addContactButton?.addEventListener("click", () => {
    const newContact = {
        'ID': crypto.randomUUID(),
        'avatar': null,
        'name': InputName?.value ?? " ",
        'phoneNumber': InputNumber?.value ?? " ",
        'stored': StorageStored?.checked ? "Storage" : "SIM"
    };
    contactsList.push(newContact);
    const liElement = document.createElement('li');
    const h2Element = document.createElement('h2');
    h2Element.innerText = newContact.name;
    const pElement = document.createElement('p');
    pElement.innerText = newContact.phoneNumber.toString();
    const newAvatar = avatarItem?.cloneNode(true);
    liElement.appendChild(newAvatar);
    liElement.appendChild(h2Element);
    liElement.appendChild(pElement);
    ulElement?.appendChild(liElement);
    h2Element.className = "text-sm";
    pElement.className = "text-sm";
    liElement.className = "flex justify-between bg-purple-200 px-2 py-3 shadow-lg rounded-md gap-5";
    liElement.style.width = "365px";
});
showContactsButton?.addEventListener("click", () => {
    contactsDrawer?.classList.remove("right-[-100%]");
    contactsDrawer?.classList.add("right-[25%]");
});
closeContactsButton?.addEventListener("click", () => {
    contactsDrawer?.classList.remove("right-[25%]");
    contactsDrawer?.classList.add("right-[-100%]");
});
//# sourceMappingURL=ts_hw_10.js.map