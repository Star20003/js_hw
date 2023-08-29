import{
    addContactButton,
    showContactsButton,
    closeContactsButton
} from './importer.js'

import{
    addContactEvent,
    showContactsEvent,
    hideContactsEvent
} from './events.js'

addContactButton?.addEventListener ("click", addContactEvent)

showContactsButton?. addEventListener ( "click" , showContactsEvent)

closeContactsButton?. addEventListener ( "click" , hideContactsEvent)