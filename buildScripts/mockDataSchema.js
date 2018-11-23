// Declare schema which describes our mock data
// Here we declare detailed rules about how our mock data should be generated
// we are exporting a chunck of json which describes the shape of our mock data
// at the top level declare the type of data i.e. type:object
// that object contains a set of properties
// the first property is called users which is an array type. we specify the array contains 3 to 5 items
// below the user we define the shape of the actual items which go into the array
// inside the users array we will find an object which now has properties of its own
// the first property is called id which simulates a database id. It is a number. It is unique. And it starts at 1
// the first name property uses the 'faker' library and we ask for a 'fake' first name
// the last name property uses the 'faker' library and we ask for a 'fake' last name
// the email name property uses the 'faker' library and we ask for a 'fake' e-mail name
// using the 'required' property we are saying all 4 properties are required
// IMPORTANT: if you omit the 'required' property sometimes your properties will not show up
export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};
