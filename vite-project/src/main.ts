import "./style.css"


const app = document.querySelector<HTMLDivElement>('#app')


type propsType = {
  element: string;
  attribute?: any;
  children?: string | string[] | Element | Element[] | null;
}


const Box = (props:propsType) => {
  // creating the input element
  const el = document.createElement(props.element)

  // adding attributes to the element
  if(props.attribute){
    Object.keys(props.attribute).forEach( (key) => {
      el[key] = props.attribute[key]
    });
  }

  // appending child to the element
  if (!Array.isArray(props.children)) {
    el.append(props.children!)
  }
  else {
    el.append(...props.children)
  }

  //returning the element
  return el
}


//creating html elements (Form & Drawer)
app!.append(Box(
  {
    element: 'div',
    attribute: {
      className: "flex flex-col gap-16 justify-center items-center m-9"
    },
    children: [Box({
      element: 'h1',
      attribute: {
        className: "text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-900"
      },
      children: 'Contact',
    }),
    Box({
      element: 'form',
      attribute: {
        className: "flex items-center justify-center flex-col gap-3"
      },
      children: [
        Box({
          element: 'div',
          attribute: {
            className: "flex items-start justify-start flex-col"
          },
          children: [
            Box({
              element: 'label',
              attribute: {
                className: "mb-1 text-sm font-medium text-gray-900"
              },
              children: "Full Name"
            }),
            Box({
              element: 'input',
              attribute: {
                className: "rounded-lg w-72 bg-gray-50 text-gray-900 border border-violet-300 focus:border-violet-600 min-w-0 text-sm p-2.5 mt-2",
                placeholder: "name...",
                id: 'InputName'
              }
            })
          ]
        }),
        Box({
          element: 'div',
          attribute: {
            className: "flex items-start justify-start flex-col mt-6"
          },
          children: [
            Box({
              element: 'label',
              attribute: {
                className: "mb-1 text-sm font-medium text-gray-900"
              },
              children: "Phone Number"
            }),
            Box({
              element: 'input',
              attribute: {
                className: "rounded-lg w-72 bg-gray-50 text-gray-900 border border-violet-300 focus:border-violet-600 min-w-0 text-sm p-2.5 mt-2",
                placeholder: "number...",
                id: 'InputNumber'
              }
            })
          ]
        }),
        Box({
          element: 'div',
          attribute: {
            className: "flex content-center gap-36 mt-7"
          },
          children: [
            Box({
              element: 'div',
              attribute: {
                className: "flex justify-center items-center gap-1"
              },
              children: [
                Box({
                  element: 'label',
                  attribute: {
                    className: "ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  },
                  children: 'SIM'
                }),
                Box({
                  element: 'input',
                  attribute: {
                    type: "radio",
                    id: "SIM",
                    name: "storage",
                    value: "",
                    className: "w-4 h-4 text-purple-600 bg-gray-100 border-gray-400 focus:ring-purple-500 focus:ring-2"
                  },
                })
              ]
            }),
            Box({
              element: 'div',
              attribute: {
                className: "flex justify-center items-center gap-1"
              },
              children: [
                Box({
                  element: 'label',
                  attribute: {
                    className: "ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  },
                  children: 'Device'
                }),
                Box({
                  element: 'input',
                  attribute: {
                    type: "radio",
                    id: "Device",
                    name: "storage",
                    value: "",
                    className: "w-4 h-4 text-purple-600 bg-gray-100 border-gray-400 focus:ring-purple-500 focus:ring-2"
                  },
                })
              ]
            })   
          ]
        }),
        Box({
          element: 'button',
          attribute: {
            id: "addContactButton",
            type: "button",
            className:"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-500 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 w-64 mt-12"
          },
          children: 'Add Contact'
        }),
        Box({
          element: 'button',
          attribute: {
            id: "showContactsButton",
            type: "button",
            className:"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-500 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 w-64"
          },
          children: 'Show Contacts'
        })
      ]
    })
  ] 
  }
))

app!.append(Box({
  element: 'div',
  attribute: {
    id: 'contactsDrawer',
    className: "fixed own-transition top-0 right-[-100%] z-40 h-screen w-96 p-4 overflow-y-auto own-transition translate-x-full bg-white dark:bg-gray-800",
  },
  children: [
    Box({
      element: 'div',
      attribute: {
        className: "flex justify-between items-center"
      },
      children: [
        Box({
          element: 'h5',
          attribute: {
            className: "inline-flex items-center mb-4 text-base font-semibold text-purple-700 dark:text-purple-600"
          },
          children: 'Contacts'
        }),
        Box({
          element: 'button',
          attribute: {
            id: 'closeContactsButton',
            type: 'button',
            dataDrawerHide: 'drawer-right-example',
            ariaControls: 'drawer-right-example',
            className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-4 h-4 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white mt-2",
          },
          children: [
            Box({
              element: 'img',
              attribute: {
                src: '../close.png',
              }
              })
          ]
        })
      ]
    }),
    Box({
      element: 'ul',
      attribute: {
        className: " px-1 py-2 flex justify-between items-center border-b-2 border-purple-700 p-4"
      },
      children: [
        Box({
          element: 'li',
          attribute: {
            className: "text-sm"
          },
          children: 'NAME'
        }),
        Box({
          element: 'li',
          attribute: {
            className: "text-sm"
          },
          children: 'NUMBER'
        }),
        Box({
          element: 'li',
          attribute: {
            className: "text-sm"
          },
          children: 'STORAGE'
        })
      ]
    }),
    Box({
      element: 'ul',
      attribute: {
        id: "ulElement",
        className: "flex flex-col items-center gap-4 m-6"
      },
      children: []
    })
  ]
}))


type contactsType = {
  ID : string;
  avatar : string | null;
  name : string;
  phoneNumber : string | number;
  stored : "Storage" | "SIM";
};

type contactsListType = contactsType[];

const contactsList : contactsListType = []

const InputName = document.querySelector<HTMLInputElement>('#InputName')

const InputNumber = document.querySelector<HTMLInputElement>('#InputNumber')

const DeviceStored = document.querySelector<HTMLInputElement>('#Device')

const addContactButton = document.querySelector<HTMLButtonElement>('#addContactButton')

const ulElement = document.querySelector<HTMLUListElement>('#ulElement')

const showContactsButton = document.querySelector<HTMLButtonElement>('#showContactsButton')

const contactsDrawer = document.querySelector<HTMLButtonElement>('#contactsDrawer')

const closeContactsButton = document.querySelector<HTMLButtonElement>('#closeContactsButton')


addContactButton?.addEventListener ("click", () => {
  const newContact : contactsType = {
      'ID' : crypto.randomUUID() ,
      'avatar' : null ,
      'name' : InputName?.value ?? " " ,
      'phoneNumber' : InputNumber?.value ?? " " ,
      'stored' : DeviceStored?.checked? "Storage" : "SIM"
  }
  contactsList.push(newContact);

  const liElement = document.createElement('li')
  const h2Element = document.createElement('h2')
  h2Element.innerText = newContact.name
  const pElement = document.createElement('p')
  pElement.innerText = newContact.phoneNumber.toString()
  const pElement2 = document.createElement('p')
  pElement2.innerText = newContact.stored

  liElement.appendChild(h2Element);
  liElement.appendChild(pElement);
  liElement.appendChild(pElement2);
  ulElement?.appendChild(liElement);

  h2Element.className = "text-sm"
  pElement.className = "text-sm"
  liElement.className =  "flex justify-between bg-purple-200 px-2 py-3 shadow-lg rounded-md gap-5"
  liElement.style.width = "365px"
})


showContactsButton?. addEventListener ( "click" , () => {
  contactsDrawer?.classList.remove("right-[-100%]");
  contactsDrawer?.classList.add("right-[28%]");
})


closeContactsButton?. addEventListener ( "click" , () => {
  contactsDrawer?.classList.remove("right-[28%]");
  contactsDrawer?.classList.add("right-[-100%]");
})

