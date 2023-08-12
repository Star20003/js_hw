type userType = {
    firstName? : string;
    lastName? : string;
    age? : number;
    job? : string;
    maritalStatus? : boolean;
    gender? : 'male' | 'female';
    heightCM? : number;
    weightKG? : Number;
    ID? : string;
    phoneNumber? : string;
}

const users : userType[] = [
    {
        firstName : 'Stateira',
        lastName : 'Mehtari',
        age : 20,
        job : 'unemployed',
        maritalStatus : false,
        gender : 'female',
        heightCM : 173,
        weightKG : 65,
        ID : 'f74fghjk98n',
        phoneNumber : '09172184518'
    } ,
    {
        firstName : 'Reza',
        lastName : 'Mehtari',
        age : 61,
        job : 'retired',
        maritalStatus : true,
        gender : 'male',
        heightCM : 168,
        weightKG : 86,
        ID : 'gh0934sc27',
        phoneNumber : '09177014518'
        }
]

console.log('Here is the current list:', users.slice())

// Create

const addUser = (newUser : userType) : void => {
    users.push(newUser)
};

addUser(
    {
        firstName : 'Marzieh',
        lastName : 'Hosseinpour',
        age : 48,
        job : 'House wife',
        maritalStatus : true,
        gender : 'female',
        heightCM : 165,
        weightKG : 72,
        ID : '9gh762s2bn',
        phoneNumber : '09153755267'
    }
)

console.log('Here is the updated list with a new user:', users.slice())

// Delete

const removeUser = (inputID : userType['ID']) => {
    const userIndex = users.findIndex((obj) => obj.ID === inputID)
    users.splice(userIndex, (userIndex +1))
};

removeUser('f74fghjk98n')

console.log('Here is a new list with the first user being removed:', users.slice())

// Update

const editUser = (inputID : userType['ID'], editedValue : userType) => {
    const userIndex = users.findIndex((obj) => obj.ID === inputID)
    users[userIndex] = {...users[userIndex] , ...editedValue}
};

editUser('9gh762s2bn', {heightCM : 167, phoneNumber : '09364979192'})

console.log('Here is a new list with the third user being edited(height & phoneNumber):', users.slice())

//sort

const sortUsers = () : void => {
    users.sort()
};

sortUsers()

console.log('Here is the sorted list:', users.slice())