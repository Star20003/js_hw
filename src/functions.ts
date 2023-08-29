import{
    avatarItem,
} from './importer.js'

import {
    contactInfoType,
    inputFieldsType,
} from './types';

export const createListItem = (contactInfo: contactInfoType) : HTMLLIElement => {
    const liElement = document.createElement('li')
    const h2Element = document.createElement('h2')
    h2Element.innerText = contactInfo.contactName
    const pElement = document.createElement('p')
    pElement.innerText = contactInfo.contactPhoneNumber.toString()

    const newAvatar = avatarItem?.cloneNode(true);
    liElement.appendChild(newAvatar!);
    liElement.appendChild(h2Element);
    liElement.appendChild(pElement);

    h2Element.className = "text-sm"
    pElement.className = "text-sm"
    liElement.className =  "flex justify-between bg-purple-200 px-2 py-3 shadow-lg rounded-md gap-5"
    liElement.style.width = "365px"

    return liElement
}

export const validateInputFields = (...fields : inputFieldsType ) : Boolean => {
    return fields.every( (field) => !!field.toString() )
}

export const validateCreateContact = (contactInfo: contactInfoType) => {
    if (!validateInputFields(contactInfo.contactName , contactInfo.contactPhoneNumber + "")) {
        alert('All Fields Must Be Filled With A Value')
        throw Error ('All fields must be filled')
        }
}