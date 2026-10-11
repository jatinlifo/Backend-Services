
const registerSchemaWithAjvValidator = {
    type: "object",

    properties: {
        username: {
            type: "string",
            minLength: 3,
            maxLength: 30
        },

        surname: {
            type: "string",
            maxLength: 30
        },

        middleName: {
            type: "string",
            maxLength: 30
        },

        familyName: {
            type: "string",
            maxLength: 30
        },

        preferName: {
            type: "string",
            maxLength: 30
        },

        email: {
            type: "string",
            minLength: 1,
            format: "email"
        },

        password: {
            type: "string",
            minLength: 8,
            maxLength: 100,
            allOf: [
                { pattern: "[A-Z]" },
                { pattern: "[a-z]" },
                { pattern: "[0-9]" },
                { pattern: "[^A-Za-z0-9]" }
            ]
        },

        confirmPassword: {
            type: "string"
        },

        dob: {
            type: "string",
            format: "date"
        },

        phoneNo: {
            type: "string",
            pattern: "^[6-9][0-9]{9}$"
        }
    },

    required: [
        "username",
        "email",
        "password",
        "confirmPassword",
        "dob",
        "phoneNo"
    ],

    additionalProperties: false
};

export default registerSchemaWithAjvValidator;
