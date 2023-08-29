export type contactsType = {
    ID : string;
    avatar : string | null;
    name : string;
    phoneNumber : string | number;
    stored : "Storage" | "SIM";
};

export type contactInfoType = {
    contactName : string;
    contactPhoneNumber : string | number;
}

export type contactsListType = contactsType[];

export type inputFieldsType = string[]