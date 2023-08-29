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
    contactsDrawer,
} from './importer.js'

import{
    createListItem,
    validateCreateContact,
} from './functions.js'


export const addContactEvent = () => {

    validateCreateContact({
        contactName : InputName!.value ,
        contactPhoneNumber : InputNumber!.value 
    })

    const newContact : contactsType = {
        'ID' : crypto.randomUUID() ,
        'avatar' : null ,
        'name' : InputName?.value ?? " " ,
        'phoneNumber' : InputNumber?.value ?? " " ,
        'stored' : StorageStored?.checked? "Storage" : "SIM"
    }

    contactsList.push(newContact);

    const liElement = createListItem({
        contactName : newContact.name,
        contactPhoneNumber : newContact.phoneNumber
    })

    ulElement?.appendChild(liElement);

}


export const showContactsEvent = () => {
    contactsDrawer?.classList.remove("right-[-100%]");
    contactsDrawer?.classList.add("right-[25%]");
}


export const hideContactsEvent = () => {
    contactsDrawer?.classList.remove("right-[25%]");
    contactsDrawer?.classList.add("right-[-100%]");
}
