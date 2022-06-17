const obj = {
  LOG_IN: {
    type: "LOGIN_IN";
    isAuthenticated: true
  },
  LOG_OUT: {
    type: "LOG_OUT";
    isAuthenticated: false
  }
}

interface IUser {
  name: string
  age: number
  occupation: string
}

/**
 * Extract Keys  from the interface
 */
type keyOfIUser = keyof IUser
const keys: keyOfIUser = "age"


/**
 * Convert the object to typescript type
 * Take the keys of the object and make them as type
 */
type typeOfObjectKeys = keyof typeof obj
const types: typeOfObjectKeys = "LOG_IN"


/**
 * Extract the type of the nested object
 */
type typeOfObjectKeyValues = keyof typeof obj[keyof typeof obj]
const nestedTypes: typeOfObjectKeyValues = "isAuthenticated"


