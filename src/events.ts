import {
    contactsType,
} from './types';

import {
    contactsList
} from './states.js'

import{
    InputName,
    InputNumber,
    StorageStored,
    ulElement,
    avatarItem,
    contactsDrawer,
} from './importer.js'


export const addContactEvent = () => {
    const newContact : contactsType = {
        'ID' : crypto.randomUUID() ,
        'avatar' : null ,
        'name' : InputName?.value ?? " " ,
        'phoneNumber' : InputNumber?.value ?? " " ,
        'stored' : StorageStored?.checked? "Storage" : "SIM"
    }
    contactsList.push(newContact);

    const liElement = document.createElement('li')
    const h2Element = document.createElement('h2')
    h2Element.innerText = newContact.name
    const pElement = document.createElement('p')
    pElement.innerText = newContact.phoneNumber.toString()

    const newAvatar = avatarItem?.cloneNode(true);
    liElement.appendChild(newAvatar!);
    liElement.appendChild(h2Element);
    liElement.appendChild(pElement);
    ulElement?.appendChild(liElement);

    h2Element.className = "text-sm"
    pElement.className = "text-sm"
    liElement.className =  "flex justify-between bg-purple-200 px-2 py-3 shadow-lg rounded-md gap-5"
    liElement.style.width = "365px"
}


export const showContactsEvent = () => {
    contactsDrawer?.classList.remove("right-[-100%]");
    contactsDrawer?.classList.add("right-[25%]");
}


export const hideContactsEvent = () => {
    contactsDrawer?.classList.remove("right-[25%]");
    contactsDrawer?.classList.add("right-[-100%]");
}
