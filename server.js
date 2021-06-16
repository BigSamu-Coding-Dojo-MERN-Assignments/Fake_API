
// INITIALIZATION 

// APIs required
const express = require("express");
const faker = require("faker");

// Definition of variables
const app = express();

// For POST requests...
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// CLASS DEFINITION

// User Class
const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

// Company Class
const createCompany = () => {
    const newCompany = {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
}

// ROUTES

// Route for creating a new User
app.get("/api/users/new", (request, response) => {
  response.json({user: createUser()});
});

// Route for creating a new Company
app.get("/api/companies/new", (request, response) => {
    response.json({company: createCompany()});
});

// Route for creating a new Company
app.get("/api/user/company", (request, response) => {
    response.json({
        user: createUser(),
        company: createUser()
    });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
