export type contactsType = {
    ID : string;
    avatar : string | null;
    name : string;
    phoneNumber : string | number;
    stored : "Storage" | "SIM";
};

export type contactsListType = contactsType[];